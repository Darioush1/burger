// object relational mapping
//creates logic helps figure out sql code without messing up java script, letting us use javascript objects 
const connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
            if(err) throw err;
            cb(result)
        })
    },
    insertOne: function (cols, vals, cb){
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (' + vals + ', false);', 
        function(err, result) {
            if(err) throw err;
            valOfCol(result)
        })
    },
    updateOne: function (objColVals, condition, cb){
        connection.query('UPDATE burgers (burger_name) SET devoured = true Where burger_name' + objColVals + ';', 
        function(err, result) {
            if(err) throw err;
            valOfCol(result)
        })
    }
};

module.exports = orm;