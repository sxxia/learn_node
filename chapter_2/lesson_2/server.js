let http = require('http');

// 创建一个server实例
let server = http.createServer()

server.on('request', (req, res) => {
  // get url
  let url = req.url;

  if(url === '/') {
    res.end('index page');
  } else if (url === '/login') {
    res.end('login page');
  } else if (url === '/register') {
    res.end('register page');
  } else if (url === '/product') {
    let arr = [
      {
        name: 'Iphone X',
        price: '$799'
      },
      {
        name: 'Iphone 8',
        price: '$699'
      }
    ];

    res.end(JSON.stringify(arr));
  } else {
    res.end('404 NOT Found!');
  }
});

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});