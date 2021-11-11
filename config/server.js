var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app = express();

//MOTOR DE GERAÇÃO DE VIEWS
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;