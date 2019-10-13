const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', function (req, res) {
    burger.all(function(data) {
        //this var might have to be changed
        var hbsObject = {
            burger:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post('/api/burgers', function (req, res) {
    burgers.insertOne(['burgerName']), [reg.body.burgerName], function(result) {
        res.json({id: result.insertId})
    } 
});

module.exports = router;

