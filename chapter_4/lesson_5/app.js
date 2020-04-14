const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('请求来了1~')
  next()  // 调用next()，请求会去下一个紧挨着的匹配的中间件
});

app.use((req, res, next) => {
  console.log('请求来了2~')
   // 没有调用next()，请求会留在该中间件中
});

app.use((req, res, next) => {
  console.log('请求来了3~')
});

app.listen(3000, () => {
  console.log('server is running');
});