const mssql = require('mssql')
var request = new mssql.Request();

function NoticiasDAO_mssql(connection) {
    this._connection = connection;
}

// mssql.connect(connection, function () {
//     request.query('', function (error, response) {
//         response.recordset;
//     })
// })


NoticiasDAO_mssql.prototype.getNoticias = function (callback) {
    mssql.connect(this._connection, function (err) {
        request.query('select * from noticias order by data_criacao DESC', function (error, recordset) {
            console.log(recordset);
        });
    });
}

module.exports = function () {
    return NoticiasDAO_mssql;
}