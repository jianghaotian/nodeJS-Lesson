const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    switch (pathName) {
        case '/':
            showIndex(res);
            break;
        case '/1.png':
            showImg(res);
            break;
        case '/getfilelist':
            showList(res);
            break;
        case '/delfile':
            delFile(urlObj, res);
            break;
    }

}).listen(8088);
console.log("server is listening 8088");

function showIndex (res) {
    var indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, (err, data) => {
        if (!err) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        }
    });
}

function showImg (res) {
    var imgPath = path.join(__dirname, '1.png');
    fs.readFile(imgPath, (err, data) => {
        if (!err) {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        }
    });
}

var list = [];
var filePath = path.join(__dirname, "fileDir");

function showList (res) {
    list = [];
    fs.readdir(filePath, (err, files) => {
        if (!err) {
            files.forEach((file, index) => {
                var fileObj = {};``
                var childPath = path.join(filePath, file);
                stats = fs.statSync(childPath);
                fileObj.fileType = stats.isFile() ? 'file' : 'folder';
                fileObj.fileName = file;
                fileObj.fileSize = stats.size;
                var birthTimer =  new Date(stats.birthtime);
                fileObj.createTime = `${birthTimer.getFullYear()}-${birthTimer.getMonth() + 1}-${birthTimer.getDate()} ${birthTimer.getHours()}:${birthTimer.getMinutes()}:${birthTimer.getSeconds()}`;
                list.push(fileObj);
            });
            var listStr = JSON.stringify(list);
            // res.writeHead(200, {"Content-Type": "text/plain"});
            res.write(listStr);
            res.end();
        } else {
            console.log('err1');
        }
    });
}

function delFile (urlObj, res) {
    var fileName = urlObj.query.filename;
    var createTime = urlObj.query.createtime;

    list.forEach((data, index) => {
        if (data.fileName == fileName && data.createTime == createTime) {
            deleteRealFile(fileName);
        }
    })
}

function deleteRealFile (fiPath) {
    var fPath = path.join(filePath, fiPath);
    delet(fPath);
}

function delet(fPath) {
    if(fs.statSync(fPath).isFile()) {
        fs.unlinkSync(fPath);
    } else {
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
    }
};
