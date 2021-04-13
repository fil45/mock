const express = require('express')
var cors = require('cors')
const app = express()
var path = require('path')

app.use(cors())
 
app.get('/login', function (req, res) {
    res.send({redirect_url: 'http://localhost:3001/keycloak'});
});

app.post('/login', function (req, res) {

    res.send({
        access_token: "testToken",
        refresh_token: "testRefresh",
        expires_in: "5"
    });
});

app.post('/refresh', function (req, res) {

    res.send({
        access_token: "testToken",
        refresh_token: "testRefresh",
        expires_in: "5"
    });
});

app.get('/keycloak', function (req, res) {
    res.sendFile(path.join(__dirname + '/loginform.html'));
});


 
app.listen(3001)