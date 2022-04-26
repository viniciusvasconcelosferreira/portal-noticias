//conexão com o banco de dados mysql
var mysql = require('mysql');
//conexão com o banco de dados sql server
var mssql = require('mssql');

var path = require('path');

//caminho absoluto do arquivo .env
require('dotenv').config({
    path: path.resolve(__dirname, '.env')
});

//configuração da conexão com o banco de dados mysql
var connMySQL = function () {
    return mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
}

//configuração da conexão com o banco de dados sql server
const config = {
    server: process.env.MSSQL_SERVER,
    database: process.env.MSSQL_DATABASE,
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    // port: parseInt(process.env.MSSQL_PORT),
    trustServerCertificate: true,
    synchronize: true,
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
}

var connSqlServer = function () {
    return config;
};

module.exports = function () {
    return process.env.DB_CONNECTION === 'sqlsrv' ? connSqlServer : connMySQL;
}
