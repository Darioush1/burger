const express = require('express');
const bodyParser = require('body-parser');
//const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const orm = require('./config/orm.js')

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
//app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = 3000;
console.log('listening to ' + port)
app.listen(port)