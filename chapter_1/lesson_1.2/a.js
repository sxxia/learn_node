let foo = 'hello';

function add(x, y) {
  return x + y;
}

exports.foo = foo; //在接口对象中挂载foo属性
exports.add = add; //在接口对象中挂载公共的add方法

module.exports.foo = foo; //跟上面的效果一样
module.exports.add = add;