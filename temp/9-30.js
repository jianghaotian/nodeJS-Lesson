// const http = require("http");
// const querystring = require("querystring");

// // http.get(options, (res) => {
// http.get("https://jht.haotian.pub/search", (res) => {
//     var result = "";
//     res.on("data", (chunk) => {
//         result += chunk;
//     });
//     res.on("end", () => {
//         console.log(result);
//     });

// });


// // post
// var infor = {"user": "zhangsan"};
// var str = querystring.stringify(infor);
// var options = {
//     host: "localhost",
//     port: 8081,
//     path: "/",
//     methods: "post" 
// }
// var req = http.request(options, (res)=> {


// });

// req.write(str);
// req.end();



// cheerio

const cheerio = require("cheerio");

const $ = cheerio.load("<h1>hello spider</h1>");

$("h1").text("hello node");

console.log($("h1").html());


