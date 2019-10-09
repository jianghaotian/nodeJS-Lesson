// httpServer.js
const http = require('http');

// const server = new http.Server();
// server.listen(8081);
// server.on('request', function(req, res) {
//     res.end('hello node');

// });


// getServer.js
const url = require('url');

// http.createServer(function(req, res) {

//     console.log(req.url);
//     // var urlObj = url.parse(req.url, true);
//     // console.log(urlObj);

// }).listen(8081);

// postServer.js
let postForm = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Post</title>
</head>
<body>
    <form action="http://localhost:8081/pf" method="post">
        <input type="text" name="username" />
        <input type="password" name="pwd" />
        <input type="submit" value="submit" />
    </form>
</body>
</html>
`

const qs = require("querystring");

http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    if (urlObj.pathname == '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(postForm);
    } else if (urlObj.pathname == '/pf') {
        var dataStr = "";
        req.on("data", (chunk) => {
            dataStr += chunk;
        });
        req.on("end", () => {
            // console.log(dataStr);
            dataObj = qs.parse(dataStr);
            console.log(dataObj);
            res.end("username: " + dataObj.username + "  pwd: " + dataObj.pwd);

        });

    }

}).listen(8081);

