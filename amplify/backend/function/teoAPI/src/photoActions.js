
const persist = require('node-persist');

const {config} = require('./config.js');


const cacheId = "GooglePhotosId";


// Set up a cache for media items that expires after 55 minutes.
// This caches the baseUrls for media items that have been selected
// by the user for the photo frame. They are used to display photos in
// thumbnails and in the frame. The baseUrls are send to the frontend and
// displayed from there. The baseUrls are cached temporarily to ensure that the
// app is responsive and quick. Note that this data should only be stored for a
// short amount of time and that access to the URLs expires after 60 minutes.
// See the 'best practices' and 'acceptable use policy' in the developer
// documentation.

// const mediaItemCache = persist.create({
//     dir: 'persist-mediaitemcache/',
//     ttl: 3300000,  // 55 minutes
// });
// mediaItemCache.init();

async function getFromMediaCache() {
    return await mediaItemCache.getItem(cacheId);
}

function clearMediaCache() {
    mediaItemCache.removeItem(cacheId);
}
  
// Temporarily cache a list of the albums owned by the user. This caches
// the name and base Url of the cover image. This ensures that the app
// is responsive when the user picks an album.
// Loading a full list of the albums owned by the user may take multiple
// requests. Caching this temporarily allows the user to go back to the
// album selection screen without having to wait for the requests to
// complete every time.
// Note that this data is only cached temporarily as per the 'best practices' in
// the developer documentation. Here it expires after 10 minutes.

// const albumCache = persist.create({
//   dir: 'persist-albumcache/',
//   ttl: 600000,  // 10 minutes
// });
// albumCache.init();

async function getFromAlbumCache() {
    return await albumCache.getItem(cacheId);
}

function putInAlbumCache(data) {
    albumCache.setItem(cacheId, data);
}

function clearAlbumCache() {
    albumCache.removeItem(cacheId);
}

// For each user, the app stores the last search parameters or album
// they loaded into the photo frame. The next time they log in
// (or when the cached data expires), this search is resubmitted.
// This keeps the data fresh. Instead of storing the search parameters,
// we could also store a list of the media item ids and refresh them,
// but resubmitting the search query ensures that the photo frame displays
// any new images that match the search criteria (or that have been added
// to an album).

// const storage = persist.create({dir: 'persist-storage/'});
// storage.init();


// If the supplied result is succesful, the parameters and media items are
// cached.
// Helper method that returns and caches the result from a Library API search
// query returned by libraryApiSearch(...). If the data.error field is set,
// the data is handled as an error and not cached. See returnError instead.
// Otherwise, the media items are cached, the search parameters are stored
// and they are returned in the response.
function returnPhotos(res, userId, data, searchParameter) {
    if (data.error) {
      returnError(res, data)
    } else {
      // Remove the pageToken and pageSize from the search parameters.
      // They will be set again when the request is submitted but don't need to be
      // stored.
      delete searchParameter.pageToken;
      delete searchParameter.pageSize;
  
      // Cache the media items that were loaded temporarily.
      mediaItemCache.setItem(userId, data.photos);
      // Store the parameters that were used to load these images. They are used
      // to resubmit the query after the cache expires.
      storage.setItem(userId, {parameters: searchParameter});
  
      // Return the photos and parameters back int the response.
      res.status(200).send({photos: data.photos, parameters: searchParameter});
    }
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
  async function libraryApiGetAlbums(authToken) {
    let albums = [];
    let nextPageToken = null;
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
        const albumResponse = await fetch(config.apiEndpoint + '/v1/albums?' + parameters, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
          },
        });
  
        const result = await checkStatus(albumResponse);
  
        console.log(`Response: ${result}`);
        
        if (result && result.albums) {
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
  
  // Return the body as JSON if the request was successful, or thrown a StatusError.
  async function checkStatus(response){
    if (!response.ok){
      // Throw a StatusError if a non-OK HTTP status was returned.
      let message = "";
      try{
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
    returnPhotos,
    returnError,
    constructDate,
    libraryApiGetAlbums,
    getFromMediaCache,
    getFromAlbumCache,
    clearMediaCache,
    putInAlbumCache,
    clearAlbumCache,
    checkStatus,
    StatusError
  };