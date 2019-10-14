const mysql = require('mysql');
let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'RIPsonics9596',
        database:'burgers_db',
        dialect: 'mysql'
    });


connection.connect(
    function (err) {
        if (err) {
            console.log('sql connection error ' + err.stack)
            return
        }
        console.log('connected as id ' + connection.threadId)
    }
);

module.exports = connection