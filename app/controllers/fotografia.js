var moment = require('moment');

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = new appliction.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticiasFotografia(function (error, result) {
        res.render("noticias/noticias_fotografia", { noticias: result, moment: moment });
    });

}