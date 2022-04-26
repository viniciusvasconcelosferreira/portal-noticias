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


    noticiasModel.getNoticias(function (result_news) {
        var itens_autor = [];
        var itens_destaque = [];
        var images_autor = ['person_1.jpg', 'person_2.jpg', 'person_3.jpg', 'person_4.jpg'];
        var images_destaque = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg',
            'image_5.jpg', 'image_6.jpg', 'image_7.jpg', 'image_8.jpg',
            'image_9.jpg', 'image_10.jpg', 'image_11.jpg', 'image_12.jpg'];

        if (result_news !== 'undefined' && result_news !== undefined) {
            for (var i = 0; i < result_news.length; i++) {
                var item_autor = images_autor[Math.floor(Math.random() * images_autor.length)];
                var item_destaque = images_destaque[Math.floor(Math.random() * images_destaque.length)];
                itens_autor.push(item_autor);
                itens_destaque.push(item_destaque);
            }
        }
        noticiasModel.getCategoriasEQtd(function (result_categories) {
            noticiasModel.getDatasEQtd(function (result_dates) {
                res.render("home/index", {
                    noticias: result_news,
                    moment: moment,
                    itens: result_news !== undefined && result_news !== 'undefined' ? itens_autor : null,
                    destaques: result_news !== undefined && result_news !== 'undefined' ? itens_destaque : null,
                    categorias: result_categories !== undefined && result_categories !== 'undefined' ? result_categories : null,
                    datas: result_dates !== undefined && result_dates !== 'undefined' ? result_dates : null,
                    title: 'Index'
                });
            });
        });
    });
}