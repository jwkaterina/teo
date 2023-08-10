const jwt = require('jsonwebtoken');


function getGoogleIdToken(token) {
    return jwt.decode(token, { complete: true }).payload['custom:access_token'];
}


module.exports = {
    getGoogleIdToken
};

