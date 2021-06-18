"use strict";
/**
 * Module dependencies.
 */
const Config = require('./config/config');
process.env.PORT = Config.server.port;
process.env.TZ = "Asia/Hong_Kong";
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var helmet = require('helmet');

//load user route
var bilangan = require('./routes/bilangan');


var app = express();
const cors = require('cors');
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(helmet());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

///User
app.post('/segitiga/',bilangan.segitiga);
app.post('/ganjil/',bilangan.ganjil);
app.post('/prima/',bilangan.prima);

//app.use(app.router);

app.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port 3000");
});

app.use(cors());
app.options('*', cors());