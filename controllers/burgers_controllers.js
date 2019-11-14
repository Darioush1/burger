const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function(data) {
        console.log('OK it ideally should work here? ' + JSON.stringify(data));
        //var stringifyData = JSON.stringify(data);
        // for (var i =0; i < data.length; i++) {
		// console.log(data[i].burger_name)
        // res.render("index", {data: data[i]})
        // }
        res.render('index', {data: data.burger_name})
        // , hbsObject)
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
    const { burger_name } = req.body;
    // const { id } = req.params;
    burger.insertOne("burger_name", burger_name), function(result) {
        res.json({id: result.insertId})
    } 
});

module.exports = router;

