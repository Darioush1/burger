var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols, vals, function (res){
        cb(res);
    })
    },
    update: function(id, cb){
        orm.updateOne('burger', id, cb, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;