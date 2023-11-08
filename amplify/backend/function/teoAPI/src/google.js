const {config} = require('./config.js');


// If the supplied result is succesful, the parameters and media items are
// cached.
// Helper method that returns and caches the result from a Library API search
// query returned by libraryApiSearch(...). If the data.error field is set,
// the data is handled as an error and not cached. See returnError instead.
// Otherwise, the media items are cached, the search parameters are stored
// and they are returned in the response.
function returnPhotos(res, data, searchParameter) {
  if (data.error) {
    returnError(res, data)
  } else {
    // Remove the pageToken and pageSize from the search parameters.
    // They will be set again when the request is submitted but don't need to be
    // stored.
    delete searchParameter.pageToken;
    delete searchParameter.pageSize;

    // Cache the media items that were loaded temporarily.
    // mediaItemCache.setItem(userId, data.photos);
    // Store the parameters that were used to load these images. They are used
    // to resubmit the query after the cache expires.
    // storage.setItem(userId, {parameters: searchParameter});

    // Return the photos and parameters back int the response.
    res.status(200).send({photos: data.photos, parameters: searchParameter});
  }
}

// Submits a search request to the Google Photos Library API for the given
// parameters. The authToken is used to authenticate requests for the API.
// The minimum number of expected results is configured in config.photosToLoad.
// This function makes multiple calls to the API to load at least as many photos
// as requested. This may result in more items being listed in the response than
// originally requested.
async function libraryApiSearch(authToken, parameters) {
  let photos = [];
  let error = null;

  parameters.pageSize = config.searchPageSize;

  try {
    // Loop while the number of photos threshold has not been met yet
    // and while there is a nextPageToken to load more items.
    do {
      console.log(`Submitting search with parameters: ${JSON.stringify(parameters)}`);

      // Make a POST request to search the library or album
      const searchResponse =
        await fetch(config.photosApiEndpoint + '/v1/mediaItems:search', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
          body: JSON.stringify(parameters)
        });

      const result = await checkStatus(searchResponse);

      console.log(`Response: ${result}`);

      // The list of media items returned may be sparse and contain missing
      // elements. Remove all invalid elements.
      // Also remove all elements that are not images by checking its mime type.
      // Media type filters can't be applied if an album is loaded, so an extra
      // filter step is required here to ensure that only images are returned.
      const items = result?.mediaItems ?
          result.mediaItems
              .filter(x => x)  // Filter empty or invalid items.
              // Only keep media items with an image mime type.
              .filter(x => x?.mimeType.startsWith('image/')) :
          [];

      photos = photos.concat(items);

      // Set the pageToken for the next request.
      parameters.pageToken = result.nextPageToken;

      console.log(
          `Found ${items.length} images in this request. Total images: ${
              photos.length}`);

      // Loop until the required number of photos has been loaded or until there
      // are no more photos, ie. there is no pageToken.
    } while (photos.length < config.photosToLoad && parameters.pageToken != null);

  } catch (err) {
    // Log the error and prepare to return it.
    error = err;
    console.log(error);
  }

  console.log('Search complete.');
  return {photos, parameters, error};
}

// Responds with an error status code and the encapsulated data.error.
function returnError(res, data) {
  // Return the same status code that was returned in the error or use 500
  // otherwise.
  const statusCode = data.error.status || 500;
  // Return the error.
  res.status(statusCode).send(JSON.stringify(data.error));
}

// Constructs a date object required for the Library API.
// Undefined parameters are not set in the date object, which the API sees as a
// wildcard.
function constructDate(year, month, day) {
  const date = {};
  if (year) date.year = year;
  if (month) date.month = month;
  if (day) date.day = day;
  return date;
}


// Returns a list of all albums owner by the logged in user from the Library
// API.
async function libraryApiGetAlbums(authToken, shared = false) {
  let albums = [];
  let error = null;

  let parameters = new URLSearchParams();
  parameters.append('pageSize', config.albumPageSize);

  try {
    // Loop while there is a nextpageToken property in the response until all
    // albums have been listed.
    do {
      console.log(`Loading albums. Received so far: ${albums.length}`);
      // Make a GET request to load the albums with optional parameters (the
      // pageToken if set).
      const suffix = shared ? '/v1/sharedAlbums?' : '/v1/albums?';
      const albumResponse = await fetch(config.photosApiEndpoint + suffix + parameters, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
      });

      const result = await checkStatus(albumResponse);

      console.log(`Response: ${result}`);
      
      if (result?.albums) {
        console.log(`Number of albums received: ${result.albums.length}`);
        // Parse albums and add them to the list, skipping empty entries.
        const items = result.albums.filter(x => !!x);

        albums = albums.concat(items);
      }
    if(result.nextPageToken){
      parameters.set('pageToken', result.nextPageToken);
    }else{
      parameters.delete('pageToken');
    }
      
      // Loop until all albums have been listed and no new nextPageToken is
      // returned.
    } while (parameters.has('pageToken'));

  } catch (err) {
    // Log the error and prepare to return it.
    error = err;
    console.log(error);
  }

  console.log('Albums loaded.');
  return {albums, error};
}

// Returns a list of all albums owner by the logged in user from the Library
// API.
async function libraryApiGetPlaylistItems(authToken, playlistId) {
  let videosInfo = [];
  let error = null;

  let parameters = new URLSearchParams();
  parameters.append('part', 'id,contentDetails,snippet');
  parameters.append('playlistId', playlistId);

  try {
    // Loop while there is a nextpageToken property in the response until all
    // albums have been listed.
    do {
      console.log(`Loading videosInfo. Received so far: ${videosInfo.length}`);
      const suffix = '/youtube/v3/playlistItems?';
      const response = await fetch(config.apiEndpoint + suffix + parameters, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
      });

      const result = await checkStatus(response);

      console.log(`Response: ${result}`);
      
      if (result?.items) {
        console.log(`Number of videosInfo received: ${result.items.length}`);
        // Parse videosInfo and add them to the list, skipping empty entries.
        const items = result.items.filter(x => !!x);

        videosInfo = videosInfo.concat(items);
      }
    if(result.nextPageToken){
      parameters.set('pageToken', result.nextPageToken);
    }else{
      parameters.delete('pageToken');
    }
      
      // Loop until all videosInfo have been listed and no new nextPageToken is
      // returned.
    } while (parameters.has('pageToken'));

  } catch (err) {
    // Log the error and prepare to return it.
    error = err;
    console.log(error);
  }

  console.log('videosInfo loaded.');
  return {videosInfo, error};
}

// Return the body as JSON if the request was successful, or thrown a StatusError.
async function checkStatus(response){
  if (!response.ok){
    // Throw a StatusError if a non-OK HTTP status was returned.
    let message = "";
    try {
      // Try to parse the response body as JSON, in case the server returned a useful response.
      message = await response.json();
    } catch( err ){
      // Ignore if no JSON payload was retrieved and use the status text instead.
    }
    throw new StatusError(response.status, response.statusText, message);
  }

  // If the HTTP status is OK, return the body as JSON.
  return await response.json();
}

// Custom error that contains a status, title and a server message.
class StatusError extends Error {
  constructor(status, title, serverMessage, ...params) {
    super(...params)
    this.status = status;
    this.statusTitle = title;
    this.serverMessage= serverMessage;
  }
}

module.exports = {
  returnError,
  returnPhotos,
  libraryApiSearch,
  libraryApiGetAlbums,
  libraryApiGetPlaylistItems,
};