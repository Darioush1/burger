const connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb){
        var sqlQuery = 'SELECT * FROM ' + tableInput + ';';
        connection.query(sqlQuery, function(err, result) {
            if(err) {throw err};
          
            cb(result);
            
        })
    },
    insertOne: function (table, cols, vals, cb){
        console.log('inside insert one orm', table, cols, vals)
        var sqlQuery = 'INSERT INTO ' + table + ' ( '+ cols +' ) VALUES  ("'+ vals +'");';

        connection.query(sqlQuery, function(err, result) {
            if(err) { throw err };
            //valOfCol(result)
            cb(result);
        })

       
    },
    updateOne: function (tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured = true WHERE burger_name = ' + condition + ';', 
        function(err, result) {
            if(err) throw err;
            valOfCol(result);
            cb (result)
        })
    }
};

module.exports = orm;