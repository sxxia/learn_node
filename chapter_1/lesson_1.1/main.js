// 这里add1代表的是整个hello.js模块
let add1 = require('./hello');
let add2 = require('./hello');

console.log(add1.add());
console.log(add2.add());