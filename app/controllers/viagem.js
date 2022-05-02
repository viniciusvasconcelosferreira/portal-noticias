var moment = require('moment');
moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

module.exports.viagens = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = process.env.DB_CONNECTION === 'mysql' ? new appliction.app.models.NoticiasDAO(connection) : new appliction.app.models.NoticiasDAO_mssql(connection);

    noticiasModel.getNoticiasViagem(function (result_travel_news) {
        var itens_autor = [];
        var itens_destaque = [];
        var images_autor = ['person_1.jpg', 'person_2.jpg', 'person_3.jpg', 'person_4.jpg'];
        var images_destaque = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg',
            'image_5.jpg', 'image_6.jpg', 'image_7.jpg', 'image_8.jpg',
            'image_9.jpg', 'image_10.jpg', 'image_11.jpg', 'image_12.jpg'];
        if (result_travel_news !== 'undefined' && result_travel_news !== undefined) {
            for (var i = 0; i < result_travel_news.length; i++) {
                var item_autor = images_autor[Math.floor(Math.random() * images_autor.length)];
                var item_destaque = images_destaque[Math.floor(Math.random() * images_destaque.length)];
                itens_autor.push(item_autor);
                itens_destaque.push(item_destaque);
            }
        }
        noticiasModel.getCategoriasEQtd(function (result_categories) {
            noticiasModel.getDatasEQtd(function (result_dates) {
                noticiasModel.getNoticiasRand(function (result_rand_news) {
                    res.render("noticias/noticias_viagem", {
                        noticias: result_travel_news,
                        moment: moment,
                        categorias: result_categories,
                        datas: result_dates,
                        title: 'Viagem',
                        itens: itens_autor,
                        destaques: itens_destaque,
                        rand_news: result_rand_news,
                        connection: process.env.DB_CONNECTION
                    });
                });
            });
        });
    });
}