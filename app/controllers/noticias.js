var moment = require('moment');
moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = process.env.DB_CONNECTION === 'mysql' ? new application.app.models.NoticiasDAO(connection) : new application.app.models.NoticiasDAO_mssql(connection);

    noticiasModel.getNoticias(function (result) {
        res.render('noticias/noticias', {noticias: result});
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function (result) {
        res.render('noticias/noticia', {noticia: result});
    });
}