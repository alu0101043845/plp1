var ip = require("ip");
var express = require('express')
var app = express()
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index', { title: 'Práctica 1: Aplicación web' });
})

/*
 var router = express.Router();
  module.exports = router; 
*/
app.get('/pagsig', function (req, res) {
  //res.send('Hello Chuchu!')
  res.render('index', { title: 'Página siguiente' });
})

app.get('/cat', function (req, res) {
  res.send('Got a GET request'+
    '<br/><img src="kitten.jpg" />'
  );
	
})

app.get('/dog', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/dog.jpg'));
});

var server = app.listen(8080, ip.address(), function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
