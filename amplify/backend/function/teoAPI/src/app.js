const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const { getGoogleAccessToken } = require('./dynamodb.js')
const {
  returnPhotos,
  libraryApiSearch,
} = require('./photoActions.js')
const { getAlbumId } = require('./ssm.js')

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

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
