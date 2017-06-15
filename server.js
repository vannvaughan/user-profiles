var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var session = require('express-session');
var app = express();
var config = require('./config.js');
var corsOption = {
            origin: 'http://localhost:8999'
        };
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');


app.use(cors(corsOption))
app.use(bodyParser.json());
app.use(session({ secret: config.sessionSecret }));

app.post('/api/login', userCtrl.login)

app.get('/api/profiles', profileCtrl.getFriendsProfile)

app.listen(3000, function(){
    console.log('PEANUT BUTTER AND JEALOUS!!')
});