var moment = require('moment');
moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

module.exports.fotografias = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = process.env.DB_CONNECTION === 'mysql' ? new appliction.app.models.NoticiasDAO(connection) : new appliction.app.models.NoticiasDAO_mssql(connection);

    noticiasModel.getNoticiasFotografia(function (result) {
        var itens_destaque = [];
        var images_destaque = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg',
            'image_5.jpg', 'image_6.jpg', 'image_7.jpg', 'image_8.jpg',
            'image_9.jpg', 'image_10.jpg', 'image_11.jpg', 'image_12.jpg'];

        if (result !== 'undefined' && result !== undefined) {
            for (var i = 0; i < result.length; i++) {
                var item_destaque = images_destaque[Math.floor(Math.random() * images_destaque.length)];
                itens_destaque.push(item_destaque);
            }
        }

        noticiasModel.getCategoriasEQtd(function (result_categories) {
            noticiasModel.getDatasEQtd(function (result_dates) {
                noticiasModel.getNoticiasRand(function (result_rand_news) {
                    console.log(result_dates);
                    res.render("noticias/noticias_fotografia", {
                        noticias: result,
                        moment: moment,
                        destaques: itens_destaque,
                        title: 'Fotografia',
                        categorias: result_categories,
                        datas: result_dates,
                        rand_news: result_rand_news,
                        connection: process.env.DB_CONNECTION
                    });
                });
            });
        });
    });

}