const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// post请求体中的Content—Type为：application/x-www-form-urlencoded，则配置如下：
app.use(bodyParser.urlencoded({ extended: false }));

// post请求体中的Content-Type为：application/json，则配置如下：
app.use(bodyParser.json());

app.post('/post', (req, res)=>{
  // 得到post请求的数据
  const result = req.body
  console.log(result.username)
  res.send(result)
});

app.listen(3000, () => {
  console.log('Server is running');
});
