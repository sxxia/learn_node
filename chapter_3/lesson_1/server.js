let fs = require('fs');

console.log(1);

fs.readFile('./index.html', (err, data) => {
  if (err) {
    return;
  }
  console.log(2);
});

console.log(3);