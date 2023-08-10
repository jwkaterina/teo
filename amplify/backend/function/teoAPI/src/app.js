/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["GooglePhotosId","GooglePhotosSecret"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const {
  returnPhotos,
  returnError,
  libraryApiGetAlbums,
  getFromAlbumCache,
  putInAlbumCache,
  clearAlbumCache,
} = require('./photoActions.js');

const { getGoogleIdToken } = require('./jwtActions.js');

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
const albumKeyPath = '/:' + albumIdKey;


// Handles selections from the album page where an album ID is submitted.
// The user has selected an album and wants to load photos from an album
// into the photo frame.
// Submits a search for all media items in an album to the Library API.
// Returns a list of photos if this was successful, or an error otherwise.
app.get(albumsPath + albumKeyPath, async (req, res) => {
  const albumId = req.params[albumIdKey];
  const cognitoToken = req.headers.authorization;
  const authToken = getGoogleIdToken(cognitoToken);

  console.log(`Importing album: ${albumId}`);

  // To list all media in an album, construct a search request
  // where the only parameter is the album ID.
  // Note that no other filters can be set, so this search will
  // also return videos that are otherwise filtered out in libraryApiSearch(..).
  const parameters = {albumId};

  // Submit the search request to the API and wait for the result.
  // const data = await libraryApiSearch(authToken, parameters);

  // returnPhotos(res, userId, data, parameters);

  res.json(authToken);

});

// Returns all albums owned by the user.
app.get(albumsPath, async (req, res) => {
  console.log('Loading albums');

  console.log('Loading albums from API.');
    // Albums not in cache, retrieve the albums from the Library API
    // and return them
    const cognitoToken = req.headers.authorization;
    const authToken = getGoogleIdToken(cognitoToken);
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


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
