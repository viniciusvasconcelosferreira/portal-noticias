var app = require('./config/server');

//levantamento do servidor ouvindo a porta 3000
app.listen(3000, function () {
    console.log("Servidor rodando com Express");
})