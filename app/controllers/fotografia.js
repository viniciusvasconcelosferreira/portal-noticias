var moment = require('moment');
moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

var moment = require('moment');

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = process.env.DB_CONNECTION === 'mysql' ? new appliction.app.models.NoticiasDAO(connection) : new appliction.app.models.NoticiasDAO_mssql(connection);

    noticiasModel.getNoticiasFotografia(function (result) {
        res.render("noticias/noticias_fotografia", {noticias: result, moment: moment});
    });

}