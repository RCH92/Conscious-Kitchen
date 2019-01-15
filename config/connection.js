var mysql = require('mysql2');
var connection;

if(process.env.JAWSDB_URL) {
    conndection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createconnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'CK_DB'
    });
};

connection.connect();
module.exports = connection;