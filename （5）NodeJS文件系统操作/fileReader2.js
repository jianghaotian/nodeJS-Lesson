const http = require("http");
const path = require("path");
const fs = require("fs");

var fileName = process.argv[2];
var filePath = path.join(__filename);

if(fileName != undefined) {
    filePath = path.join(__dirname, '/' + fileName);
    if(!fs.existsSync(filePath)) {
        console.log("该文件不存在!");
        process.exit();
    }
}

http.createServer((req, res) => {

    fs.open(filePath, "r", (err, fd) => {
        if(err) {
            console.log(err);
        } else {
            var len = fs.statSync(filePath).size;
            var buf = Buffer.alloc(len);
            fs.read(fd, buf, 0, len, 0, (err, br, buf) => {
                if(err) {
                    console.log(err)
                } else {
                    res.write(buf.toString());
                    res.end();
                }
                fs.close(fd, (err) => {
                    if(err) {
                        console.log(err)
                    }
                });
            });
        }
    });
}).listen(8081);
console.log("Listen 8081");
