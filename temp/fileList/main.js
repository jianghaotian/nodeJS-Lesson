const http = require("http");
const url = require("url");


http.createServer(httpManager).listen(8081);
console.log("listen 8081");

function httpManager(req, res) {
    var reqObj = url.parse(req.url, true);

    var pathName = reqObj.pathname;
    switch(pathName) {
        case "/":
            showIndex(res);
            break;
        case "/file":
            showFile(res, reqObj.query);
            break;

        default:
            res.end("error");
            break;
    }

}

var fileList = ["t1.txt", "t2.txt"];

function showIndex(res) {
    
    var str = "<ul>";
    for(var i = 0; i < fileList.length; i++) {
        var liNode = `<li><a href="/file?fileId=${i}">${fileList[i]}</a></li>`;
        str += liNode;
    }
    str += "</ul>";

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(str);
    res.end();
}

function showFile(res, query) {
    fileId = query['fileId'];

    res.write(fileList[fileId]);
    res.end();

}



