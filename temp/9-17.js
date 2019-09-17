const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname, "/file.txt");
var filePath1 = path.join(__dirname, "/file1.txt");

// 1
// console.time("test");

// var f0 = fs.readFileSync(filePath);

// console.timeEnd("test");

// var f1 = fs.readFileSync(filePath1);

// console.log(f0.toString());
// console.log(f1.toString());


// 2
// fs.readFile(filePath, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });


// 3
// var fid = fs.openSync(filePath, "r+");
// var buf = Buffer.alloc(30);
// var len = fs.statSync(filePath).size;
// fs.readSync(fid, buf, 0, len, 0);
// console.log(buf.toString());
// fs.closeSync(fid);


// 4
var statObj = fs.statSync(filePath);



