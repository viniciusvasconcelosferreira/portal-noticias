module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        application.app.controllers.noticias.noticias(application, req, res);

    });

    application.get('/noticia', function (req, res) {

        application.app.controllers.noticias.noticia(application, req, res);

    });

    application.get('/fotografia', function (req, res) {
        application.app.controllers.fotografia.fotografias(application, req, res);
    });

    application.get('/viagem', function (req, res) {

        application.app.controllers.viagem.viagens(application, req, res);

    });

    application.get('/moda', function (req, res) {

        application.app.controllers.moda.modas(application, req, res);

    });
}