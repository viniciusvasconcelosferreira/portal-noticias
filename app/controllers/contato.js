var moment = require('moment');

moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = process.env.DB_CONNECTION === 'mysql' ? new appliction.app.models.NoticiasDAO(connection) : new appliction.app.models.NoticiasDAO_mssql(connection);

    noticiasModel.getCategoriasEQtd(function (result_categories) {
        noticiasModel.getDatasEQtd(function (result_dates) {
            noticiasModel.getNoticiasRand(function (result_rand_news) {
                res.render("home/contato", {
                    moment: moment,
                    title: 'Contato',
                    categorias: result_categories,
                    datas: result_dates,
                    rand_news: result_rand_news,
                    connection: process.env.DB_CONNECTION
                });
            });
        });
    });
}