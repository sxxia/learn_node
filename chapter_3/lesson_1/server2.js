let fs = require('fs');

console.log(1);

let getText = (callback) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      return;
    }
    callback(data);
  });
}

getText((text) => {
  console.log(text.toString());
});

console.log(3);