var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// map a route to files
// express.static is a middleware
app.use('/assets', express.static(__dirname + '/public'));

// custom middleware
app.use('/', function(req, res, next) {
    console.log(`Request url: ${req.url}`);
    console.log(`Status code: ${res.statusCode}`);
    next();
});

// http method that responds to http get request
app.get('/', function(req, res) {
    // don't have to specify a mime type
    // as express takes care about it
    res.send('<html><head><link rel="stylesheet" type="text/css" href="assets/style.css"></link></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Person ID: ${ req.params.id }</h1></body></html>`);
});

app.get('/api', function(req, res) {
    res.json({ name: 'John' });
});

app.listen(port);