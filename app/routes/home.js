module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.home.index(application, req, res);
    });

    application.get('/sobre', function (req, res) {
        application.app.controllers.sobre.index(application, req, res);
    });

    application.get('/contato', function (req, res) {
        application.app.controllers.contato.index(application, req, res);
    });
}
