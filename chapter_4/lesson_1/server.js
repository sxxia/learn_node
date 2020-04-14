// 导入express module
const express = require('express');

// 创建一个server的实例,相当于server = http.createServer()
const app = express();

// 绑定服务器接收请求，相当于server.on('request')
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 绑定服务器端口，启动服务器。相当于server.listen(3000)
app.listen(3000, () => {
  console.log('the server is running on localhost:3000');
});