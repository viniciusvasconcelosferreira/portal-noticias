var moment = require('moment');

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = new appliction.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        var itens_autor = [];
        var itens_destaque = [];
        var images_autor = ['person_1.jpg', 'person_2.jpg', 'person_3.jpg', 'person_4.jpg'];
        var images_destaque = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg',
            'image_5.jpg', 'image_6.jpg', 'image_7.jpg', 'image_8.jpg',
            'image_9.jpg', 'image_10.jpg', 'image_11.jpg', 'image_12.jpg'];
        for (var i = 0; i < result.length; i++) {
            var item_autor = images_autor[Math.floor(Math.random() * images_autor.length)];
            var item_destaque = images_destaque[Math.floor(Math.random() * images_destaque.length)];
            itens_autor.push(item_autor);
            itens_destaque.push(item_destaque);
        }
        noticiasModel.getCategoriasEQtd(function (error, result2) {
            res.render("home/index", { noticias: result, moment: moment, itens: itens_autor, destaques: itens_destaque, categorias: result2 });
        });
    });

}