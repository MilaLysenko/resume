// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();
// сообщаем Node где лежат ресурсы сайта
app.use(express.static(__dirname + '/build'));
// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// запускаем сервер на порту 8080
app.listen( port, function () {
  console.log( 'Our app is running on http://localhost:' + port );
} );
