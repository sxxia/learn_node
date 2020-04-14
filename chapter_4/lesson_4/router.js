const express = require('express');
// 创建一个router实例
const router = express.Router();

router.get('/', (req, res) => {
  res.send('/');
});

router.get('/post', (req, res) => {
  res.send('/post');
});

router.get('/login', (req, res) => {
  res.send('/login');
});

router.get('/edit', (req, res) => {
  res.send('/edit');
});

// export路由
module.exports = router;