var mssql = require('mssql');

function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.getNoticiasFotografia = function (callback) {
    this._connection.query("select * from noticias where categoria like '%Fotografia%' order by data_noticia DESC", callback);
}

NoticiasDAO.prototype.getNoticiasViagem = function (callback) {
    this._connection.query("select * from noticias where categoria like '%Viagem%' order by data_noticia DESC", callback);
}

NoticiasDAO.prototype.getNoticiasModa = function (callback) {
    this._connection.query("select * from noticias where categoria like '%Moda%' order by data_noticia DESC", callback);
}

NoticiasDAO.prototype.getCategoriasEQtd = function (callback) {
    this._connection.query("select count(id_noticia) as quantidade,categoria from noticias group by categoria", callback);
}

NoticiasDAO.prototype.getDatasEQtd = function (callback) {
    this._connection.query("select count(id_noticia) as quantidade,data_noticia from noticias group by month(data_noticia)", callback);
}

NoticiasDAO.prototype.getNoticiasRand = function (callback) {
    this._connection.query("select * from noticias ORDER BY rand() limit 3", callback);
}

module.exports = function () {
    return NoticiasDAO;
}