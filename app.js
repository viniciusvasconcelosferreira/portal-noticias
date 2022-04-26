var app = require('./config/server');

//levantamento do servidor ouvindo a porta 3000
app.listen(5000, function () {
    console.log("Servidor rodando com Express");
})