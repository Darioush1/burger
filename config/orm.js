const connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb){
        var sqlQuery = 'SELECT * FROM ' + tableInput + ';';
        connection.query(sqlQuery, function(err, result) {
            if(err) {throw err};
          
            cb(result);
            
        })
    },
    insertOne: function (cols, vals, cb){
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (' + vals + ', false);', 
        function(err, result) {
            if(err) throw err;
            valOfCol(result)
        })
    },
    updateOne: function (tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured = true Where burger_name' + condition + ';', 
        function(err, result) {
            if(err) throw err;
            valOfCol(result)
        })
    }
};

module.exports = orm;