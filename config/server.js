var express = require('express');
var app = express();

//MOTOR DE GERAÇÃO DE VIEWS
app.set('view engine', 'ejs');

app.set('views', './app/views');


module.exports = app;