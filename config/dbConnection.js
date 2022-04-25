//conexão com o banco de dados
var mysql = require('mysql');

var mssql = require('mssql');

var path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, '.env')
});

var connMySQL = function () {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
}

var connSqlServer = function () {
    return new mssql.ConnectionPool({
        server: process.env.MSSQL_SERVER,
        database: process.env.MSSQL_DATABASE,
        user: process.env.MSSQL_USER,
        password: process.env.MSSQL_PASSWORD,
        port: process.env.MSSQL_PORT,
        trustServerCertificate: true,
        synchronize: true,
    });
}


module.exports = function () {
    return connSqlServer;
}
