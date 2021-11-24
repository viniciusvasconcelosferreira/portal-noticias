//usado principalmente para fazer upload de arquivos
var multer = require('multer');

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/public/uploads/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];

        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

var upload = multer({ storage });

module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/salvar', upload.single('imagem'), function (req, res) {
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });
}