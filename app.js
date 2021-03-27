var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

// map a route to files
// express.static is a middleware
app.use('/assets', express.static(__dirname + '/public'));

// custom middleware
app.use('/', function(req, res, next) {
    console.log(`Request url: ${req.url}`);
    console.log(`Status code: ${res.statusCode}`);
    next();
});

app.set('view engine', 'ejs');

// http method that responds to http get request
app.get('/', function(req, res) {
    // don't have to specify a mime type
    // as express takes care about it
    // res.send('<html><head><link rel="stylesheet" type="text/css" href="assets/style.css"></link></head><body><h1>Hello world!</h1></body></html>');

    res.render('index');
});

app.get('/person/:id', function(req, res) {
    // res.send(`<html><head></head><body><h1>Person ID: ${ req.params.id }</h1></body></html>`);

    res.render('person', {
        id: req.params.id,
        queryString: req.query.qstr,
    });
});

app.post('/person', urlEncodedParser, function(req, res) {
    res.send('Thank you!');
    console.log('/person');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data!');
    console.log('/personjson');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.get('/api', function(req, res) {
    res.json({ name: 'John' });
});

app.listen(port);