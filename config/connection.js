const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'RIPsonics9596',
        database:'burgers_db',
        dialect: 'mysql'
    })
}

connection.connect(
    function (err) {
        if (err) {
            console.log(err.stack)
            return
        }
        console.log('connected as id ' + connection.threadId)
    }
);

module.exports = connection