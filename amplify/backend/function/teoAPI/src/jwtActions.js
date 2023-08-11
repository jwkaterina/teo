const jwt = require('jsonwebtoken');


function getGoogleAccessToken(token) {
    return jwt.decode(token, { complete: true }).payload['custom:access_token'];
}


module.exports = {
    getGoogleAccessToken
};

