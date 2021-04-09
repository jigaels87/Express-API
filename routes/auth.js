var express = require('express');
var app = express();
var database = require('../confiq/database');

app.post('/authenticate', (req, res) => {
    let requestBody = getCredentialsFromHeaders(req);
});

// Get the user's credential from the headers (Basic)
function getCredentialsFromHeaders(req) {

    // Get the authorization from headers
    let authorization = re.header('authorization');

    // Convert autjorization to array
    let authData = authorization.split(" ");

    // Convert to utf-8
    let token = Buffer.from(`${authData[1]}`, 'base64').toString('utf8');

    // Convert token to array
    let credentials = token.split(":");

    return {
        email: credentials[0],
        password: credentials[1]
    }
}

module.exports = app;