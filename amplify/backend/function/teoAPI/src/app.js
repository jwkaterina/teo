const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { getAlbumId } = require('./ssm')

const {
  returnError,
  returnPhotos,
  libraryApiSearch,
  libraryApiGetAlbums,
} = require('./photoActions.js');

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


const albumIdKey = "albumId";
const basePath = "/photos";
const albumsPath = `${basePath}/albums`;
const sharedAlbumsPath = `${basePath}/sharedAlbums`;
const albumKeyPath = '/:' + albumIdKey;


// Handles selections from the album page where an album ID is submitted.
// The user has selected an album and wants to load photos from an album
// into the photo frame.
// Submits a search for all media items in an album to the Library API.
// Returns a list of photos if this was successful, or an error otherwise.
app.get(basePath, async (req, res) => {
  const albumId = await getAlbumId();

  // const authToken = getGoogleAccessToken(cognitoToken);

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

// Returns all albums owned by the user.
app.get(albumsPath, async (req, res) => {
  console.log('Loading albums');
    // Albums not in cache, retrieve the albums from the Library API
    // and return them
    // const authToken = getGoogleAccessToken(cognitoToken);
    const authToken = null;
    const data = await libraryApiGetAlbums(authToken);
    if (data.error) {
      // Error occured during the request. Albums could not be loaded.
      returnError(res, data);
    } else {
      // Albums were successfully loaded from the API. Cache them
      // temporarily to speed up the next request and return them.
      // The cache implementation automatically clears the data when the TTL is
      // reached.
      res.status(200).send(data);
    }
});

// Returns all albums owned by the user.
app.get(sharedAlbumsPath, async (req, res) => {
  console.log('Loading shared albums');
    // Albums not in cache, retrieve the albums from the Library API
    // and return them
    // const authToken = getGoogleAccessToken(cognitoToken);
    const authToken = null;
    const data = await libraryApiGetAlbums(authToken, true);
    if (data.error) {
      // Error occured during the request. Albums could not be loaded.
      returnError(res, data);
    } else {
      // Albums were successfully loaded from the API. Cache them
      // temporarily to speed up the next request and return them.
      // The cache implementation automatically clears the data when the TTL is
      // reached.
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
