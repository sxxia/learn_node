let fs = require('fs');

// 读取txt文件
fs.readFile('./data/data.txt', (err, data) => {
  console.log(data.toString());
});

// 写入文件
fs.writeFile('./data/data.md', 'write txt to data.md', (err) => {
  if(!err) {
    console.log('Write successfully!');
  }
});