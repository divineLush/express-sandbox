var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {
    app.get('/api', function(req, res) {
        res.json({ name: 'John' });
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
}