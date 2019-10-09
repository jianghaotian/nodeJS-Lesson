const fs = require("fs");
const path = require("path");

if (process.argv[2] == 'list') {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            var fileList = [];
            files.forEach((file, index) => {
                var fileObj = {};
                var childPath = path.join(__dirname, file);
                if(fs.lstatSync(childPath).isFile()) {
                    fileObj.fileName = file;
                    fileObj.fileSize = fs.statSync(childPath).size;
                    fileList.push(fileObj);
                }
            });
            console.log(fileList);
        }
    });
} else if (process.argv[2] == 'mkdir') {
    if (process.argv[3] == undefined) {
        console.log("文件名为空！");
    } else {
        dirPath = path.join(__dirname, process.argv[3]);
        fs.mkdir(dirPath, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("目录创建成功!!");
            }
        });
    }
} else {
    console.log("命令行参数错误！");
}
