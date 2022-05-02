var moment = require('moment');
moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

module.exports.fotografias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = process.env.DB_CONNECTION === 'mysql' ? new application.app.models.NoticiasDAO(connection) : new application.app.models.NoticiasDAO_mssql(connection);

    noticiasModel.getNoticias(function (result) {
        res.render('noticias/noticias', {noticias: result});
    });
}