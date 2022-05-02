const mssql = require('mssql')

function NoticiasDAO_mssql(connection) {
    this._connection = connection;
}

NoticiasDAO_mssql.prototype.getNoticias = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query('select * from noticias order by data_criacao DESC', function (error, response) {
            callback(response.recordset);
        });
    });
}

NoticiasDAO_mssql.prototype.getNoticia = function (id_noticia, callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.salvarNoticia = function (noticia, callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query('insert into noticias set ?', noticia, function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.get5UltimasNoticias = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query('select * from noticias order by data_criacao desc limit 5', function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.getNoticiasFotografia = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query("select * from noticias where categoria like '%Fotografia%' order by data_noticia DESC", function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.getNoticiasViagem = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query("select * from noticias where categoria like '%Viagem%' order by data_noticia DESC", function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.getNoticiasModa = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query("select * from noticias where categoria like '%Moda%' order by data_noticia DESC", function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.getCategoriasEQtd = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query("select count(id_noticia) as quantidade,categoria from noticias group by categoria", function (error, response) {
            callback(response.recordset);
        });
    });
}

NoticiasDAO_mssql.prototype.getDatasEQtd = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query('select count(id_noticia) as quantidade, year(data_noticia) as data_noticia from noticias group by year(data_noticia)', function (error, response) {
            callback(response.recordset);
        });
    });
}
NoticiasDAO_mssql.prototype.getNoticiasRand = function (callback) {
    mssql.connect(this._connection, function (err) {
        var request = new mssql.Request();
        request.query('SELECT TOP 3 * FROM noticias ORDER BY NEWID()', function (error, response) {
            callback(response.recordset);
        });
    });
}

module.exports = function () {
    return NoticiasDAO_mssql;
}