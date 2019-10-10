const express = require('express');
const router = express.Router();
const burgers = require('../models/burger');
// a problem might arise here with how we call burgers and the models burger file as burger.js is what I exported

router.get('/', function (req, res) {
    burger.selectAll(function(data) {
        //this var might have to be changed
        var hbsObject = {
            cats:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post('/api/burgers', function (req, res) {
    burger.insertOne(['burgerName']), [reg.body.burgerName], function(result) {
        res.json({id: result.insertId})
    } 
});



