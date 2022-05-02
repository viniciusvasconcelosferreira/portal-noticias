var moment = require('moment');

moment.locale('pt-br');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve('config', '.env')
});

module.exports.index = function (appliction, req, res) {
    res.render("home/sobre", {
        moment: moment,
        title: 'Sobre',
        connection: process.env.DB_CONNECTION
    });
}