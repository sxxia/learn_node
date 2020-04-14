const express = require('express');
const app = express();

app.use('/a', (req, res, next) => {
  console.log('请求来了1~');
  next();  // 调用next()，请求会去下一个紧挨着的匹配的中间件
});

app.use('/b', (req, res, next) => {
  console.log('请求来了2~');
});

app.use('/a', (req, res, next) => {
  console.log('请求来了3~');
});

app.listen(3000, () => {
  console.log('server is running');
});
