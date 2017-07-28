//var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./routes/index');

/* ???????? ??????? ????????. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;

app.use('/', routes);
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/src'));
app.use(express.static(path.join(__dirname, 'bower_components')));

// views is directory for all template files
app.set('src', __dirname + '/src');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('../src/index')
});
/*
app.get('/cool', function(request, response) {
  response.send(cool());
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});