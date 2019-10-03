const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

var indexPath = path.join(__dirname, 'index.html');
var imgPath = path.join(__dirname, '1.png');

http.createServer((req, res) => {

    var reqUrl = url.parse(req.url);

    if(reqUrl.pathname == '/') {
        res.writeHead(200, 'Content-Type: text/html');
        fs.createReadStream(indexPath).pipe(res);
    } else if (reqUrl.pathname == '/1.png') {
        res.writeHead(200, 'Content-Type: image/png');
        fs.createReadStream(imgPath).pipe(res);
    } else if (reqUrl.pathname == '/getlist') {
        // res.writeHead(200, 'Content-Type: application/json');
        dir = reqUrl.query.dir;

        data = getData(dir);
        res.write(JSON.stringify(data));
        res.end();
    }
}).listen(8081);
console.log("server is listening 8081");


function getData(dir) {

    // if(dir == 'root') {
    //     dirPath = rootPath;
    // } else if(dir == '.') {
    //     if(dirPath.length > 2) {
    //         dirPath.pop();
    //     }
    // } else {
    //     dirPath.push(dir);
    // }

    // var openPath = '';
    // dirPath.forEach((eachDir, index) => {
    //     if(eachDir != undefined) {
    //         // console.log(eachDir);
    //         openPath = path.join(openPath, eachDir.toString());
    //     }
    // });
    
    var openPath = path.join(__dirname, 'root');

    var data = [];
    var files = [];

    files = fs.readdirSync(openPath);
    files.forEach((file, index) => {
        var fileInfo = {};
        var fileStat= fs.statSync(path.join(openPath, file));
        console.log(fileStat);
        fileInfo = {
            fileType: fileStat.isDirectory() ? "folder" : "file",
            fileName: file,
            fileSize: fileStat.size,
            fileTime: fileStat.ctime
        }
        data.push(fileInfo);
    });
    return data;
}
