const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    // console.log(urlObj);
    if (urlObj.pathname == '/') {
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.write('<a href="/new?newId=12&newType=1">新闻</a>');
        res.end();
    } else if (urlObj.pathname == '/new') {
        console.log(urlObj.pathname, urlObj.query);

        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end();
    }

}).listen(8081);