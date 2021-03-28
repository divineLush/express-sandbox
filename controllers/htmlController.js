module.exports = function(app) {
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
}