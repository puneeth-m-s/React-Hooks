const fs = require("fs");

function letsReadFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: "utf8" }, (err, contents) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(contents);
    });
  });
}

let p1 = letsReadFile("example1.txt");
p1.then(
  function (contents) {
    console.log("p1" + contents);
  },
  function (err) {
    console.error(err, "message");
  },
); 
