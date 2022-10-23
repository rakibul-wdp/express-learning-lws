const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('This is home page...!!!');
    res.end();
  } else if (req.url === '/about' && req.method === 'GET') {
    res.write('This is about page...!!!');
    res.end();
  } else {
    res.write('Not found...!!!');
    res.end();
  }
});

server.listen(5000);

console.log('listening on port 5000');