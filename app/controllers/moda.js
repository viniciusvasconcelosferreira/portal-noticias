var moment = require('moment');

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = new appliction.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticiasModa(function (error, result) {
        res.render("noticias/noticias_moda", {noticias: result, moment: moment});
    });

}