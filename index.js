var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('new stuff');
  })
  .listen(process.env.PORT || 3000, function () {
    console.log('App listening on port 3000');
  });
