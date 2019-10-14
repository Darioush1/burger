const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function(data) {
        console.log('this data yo ' + data);
        //this var might have to be changed
        var hbsObject = {
            burger:data
        };
        console.log('hbs Object? ' + hbsObject);
        res.render("index", hbsObject)
    })
});

router.put('/burgers/update', function (req,res) {
    console.log.log("req.body.id inside of put call"+ req.body.id)
    burger.update(req.body.id, function(result) {
     console.log(result);
     res.redirect('/');   
    })
});

router.post('/api/:id', function (req, res) {
    burger.insertOne(['burgerName']), [req.body.burgerName], function(result) {
        res.json({id: result.insertId})
    } 
});

module.exports = router;

