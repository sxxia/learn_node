let http = require('http');
let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Title</h1>');
  }
});

server.listen(3000, () => {
  console.log('server runs on http://localhost:3000');
});