var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

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

app.set('view engine', 'ejs');

apiController(app);
htmlController(app);

app.listen(port);