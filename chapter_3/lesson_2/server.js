let http = require('http');
let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Node.js!');
  }
});

server.listen(3000, () => {
  console.log('server runs on http://localhost:3000');
});