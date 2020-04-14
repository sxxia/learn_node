let express = require('express');
let app = express();

// 方式一：常用，访问方法localhost:3000/public/css/index.css
app.use('/public/', express.static('./public'));

// 方式二：访问方法localhost:3000/css/index.css
app.use(express.static('./public'));

// 方式三：第一个参数问我们自己制定的任意文件名。访问方法localhost:3000/example/css/index.css
app.use('/example/', express.static('./public'));
app.listen(3000, () => {
  console.log('the server is running');
});
