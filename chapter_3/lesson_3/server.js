let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', (req, res) => {
  let url = req.url;

  if (url === '/') {
    fs.readFile('./resources/index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain');
        res.end('no resources');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (url === '/img') {
    fs.readFile('./resource/01.jpg', (error, data) => {
      if (error) {
        res.setHeader('Content-Type', 'text/plain');
        res.end('no resources')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else {
    res.end('404 NOT FOUND');
  }
});

server.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});