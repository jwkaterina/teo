const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const {
  getEntity,
  queryEntities,
  putEntity,
  postEntity,
  deleteEntity,
  getGoogleAccessToken 
} = require('./dynamodb.js')
const {
  returnError,
  returnPhotos,
  libraryApiSearch,
  libraryApiGetPlaylistItems,
} = require('./google.js')
const { getAlbumId, getPlaylistId } = require('./ssm.js')
const EntityError = require('./entity-error')
const WeightEntity = require('./weight-entity')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get('/weight/:PK', async (req, res) => {
  const condition = {}
  condition['PK'] = {
    ComparisonOperator: 'EQ'
  }
  const pk = WeightEntity.generatePk(req.params['PK']);
  condition['PK']['AttributeValueList'] = [ pk ];

  try {
    const items = await queryEntities(condition);
    const weights = items.map((item) => WeightEntity.fromItem(item).toDto());
    res.json({success: true, url: req.url, data: weights});
  } catch (e) {
    res.statusCode = 500;
    console.log("Could not load weights:", e);
    res.json({success: false, error: 'Could not load weights: ' + err.message, url: req.url, req: req.body});
  }
});

app.put('/weight', async (req, res) => {
  try {
    const weight = WeightEntity.fromUpdateDto(req.body);
    const params = {};
    params['PK'] = weight.pk;
    params['SK'] = weight.sk;

    const item = await getEntity(params);
    if (!item) {
      res.statusCode = 500;
      console.log(`Could not load weight PK: ${weight.pk} SK: ${weight.sk}`);
      res.json({success: false, error: `Could not load weight for year: ${weight.year} with id: ${weight.id}`, url: req.url, req: req.body});
      return;
    }

    const existingWeight = WeightEntity.fromItem(item);
    existingWeight.updateFrom(weight);

    await putEntity(existingWeight)
    res.json({success: true, url: req.url, data: existingWeight.toDto()})

  } catch (e) {
    if(e instanceof EntityError) {
      res.statusCode = 400;
    } else {
      res.statusCode = 500;
    }
    console.log("Cannot update the Weight:", e);
    res.json({success: false, error: e.message, url: req.url, req: req.body});
  }
});

app.post('/weight', async (req, res) => {
  try {
    const weight = WeightEntity.fromInsertDto(req.body);
    await postEntity(weight);
    res.json({success: true, url: req.url, data: weight.toDto()})

  } catch (e) {
    if(e instanceof EntityError) {
      res.statusCode = 400;
    } else {
      res.statusCode = 500;
    }
    console.log("Cannot create the Weight:", e);
    res.json({success: false, error: e.message, url: req.url, req: req.body});
  }
});

app.delete('weight/object/:PK/:SK', async (req, res) => {
  const params = {};
  const pk = WeightEntity.generatePk(req.params['PK']);
  const sk = WeightEntity.generateSk(req.params['SK']);
  params['PK'] = pk;
  params['SK'] = sk;

  try {
    const atts = await deleteEntity(params)
    res.json({success: true, url: req.url, data: atts});
  } catch(err) {
    console.log("Cannot delete the Weight:", e);
    res.statusCode = 500;
    res.json({success: false, error: err.message, url: req.url, req: req.body});
  }
});

app.get('/photos', async function(req, res) {
  const authToken = await getGoogleAccessToken();
  const albumId = await getAlbumId();
  console.log(`Importing album: ${albumId}`);

  // To list all media in an album, construct a search request
  // where the only parameter is the album ID.
  // Note that no other filters can be set, so this search will
  // also return videos that are otherwise filtered out in libraryApiSearch(..).
  const params = {albumId};

  // Submit the search request to the API and wait for the result.
  const data = await libraryApiSearch(authToken, params);

  returnPhotos(res, data, params);
});

app.get('/videos', async function(req, res) {
  const authToken = await getGoogleAccessToken();
  const playlistId = await getPlaylistId();
  console.log(`Importing video playlist: ${playlistId}`);

  // Submit the search request to the API and wait for the result.
  const data = await libraryApiGetPlaylistItems(authToken, playlistId);

  if (data.error) {
    returnError(res, data);
  } else {
    res.status(200).send(data);
  }
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
