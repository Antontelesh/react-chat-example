var Server = require('node-static').Server;
var http = require('http');

var server = new Server('./public');

http.createServer(function (request, response) {
  request.addListener('end', function () {
    server.serve(request, response, function (err, res) {
      if (err) {
        console.error('> Error serving ' + request.url + ' - ' + err.message);
        response.writeHead(err.status, err.headers);
        response.end();
      } else {
        console.log('> ' + request.url + ' - ' + res.message);
      }
    });
  }).resume();
}).listen('8080');

console.log('> node-static is listening on http://127.0.0.1:8080');
