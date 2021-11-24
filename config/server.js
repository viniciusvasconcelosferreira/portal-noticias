//voltado para a criação e obtenção dos dados a partir do servidor
var express = require('express');
//facilitar o gerenciamento das rotas no express
var consign = require('consign');
/*
 - serve para trabalhar com os dados vindo do cliente

 - esse pacote ele formata e transforma os dados para o formato de 
   objeto javascript e joga tudo isso em um objeto dentro do objeto 
   de requisição (req): req.body
*/
var bodyParser = require('body-parser');
//realizar a validação dos dados de entrada
var expressValidator = require('express-validator');

var app = express();

//MOTOR DE GERAÇÃO DE VIEWS
app.set('view engine', 'ejs');
app.set('views', './app/views');

//indicar onde estarão os arquivos estáticos a serem carregados
app.use(express.static('./app/public/news_blog_template'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;