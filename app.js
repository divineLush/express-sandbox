var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// http method that responds to http get request
app.get('/', function(req, res) {
    // don't have to specify a mime type
    // as express takes care about it
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Person ID: ${ req.params.id }</h1></body></html>`);
});

app.get('/api', function(req, res) {
    res.json({ name: 'John' });
});

app.listen(port);