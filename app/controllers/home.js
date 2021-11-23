var moment = require('moment');

module.exports.index = function (appliction, req, res) {
    var connection = appliction.config.dbConnection();
    var noticiasModel = new appliction.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render("home/index", { noticias: result ,moment:moment});
    });

}