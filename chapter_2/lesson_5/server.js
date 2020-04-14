let url = require('url');

// let obj = url.parse('http://www.google.com?name=simon&age=23');
// console.log(obj);

// let obj = url.parse('http://www.google.com?name=cc&age=24', true)  // 通过传入第二个参数：true将query字符串转成对象
// console.log(obj)

let urlStr = url.resolve('http://www.google.com/home', '/about') // 第二个参数前面的'/'表示根路径，如果省略则取代基URL的最后一个子地址
console.log(urlStr)