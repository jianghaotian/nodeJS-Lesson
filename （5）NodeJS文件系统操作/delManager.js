const path = require("path");
const fs = require("fs");

var fileName = process.argv[2];

if(fileName == undefined) {
    console.log("没有输入文件名!");
    process.exit();
}

var filePath = path.join(__dirname, fileName);
delet(filePath);

function delet(fPath) {
    var files = [];
    if(fs.existsSync(fPath)) {
        files = fs.readdirSync(fPath);
        files.forEach((file, index) => {
            var curPath = path.join(fPath, file);
            if(fs.statSync(curPath).isDirectory()) {
                delet(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
      fs.rmdirSync(fPath);
    }
  };
