var moment = require('moment');

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = new appliction.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticiasViagem(function (error, result) {
        res.render("noticias/noticias_viagem", { noticias: result, moment: moment });
    });

}