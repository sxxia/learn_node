let a = 1;

function add() {
  return a++;
}

// 这里是导出这个模块中的add方程
exports.add = add;