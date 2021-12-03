module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        application.app.controllers.noticias.noticias(application, req, res);

    });

    application.get('/noticia', function (req, res) {

        application.app.controllers.noticias.noticia(application, req, res);

    });

    application.get('/viagem', function (req, res) {

        application.app.controllers.viagem.viagens(application, req, res);

    });
}