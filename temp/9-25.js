// 1
const cp = require('child_process');

// cp.exec("node lll.js", (err, stdout, stderr) => {
//     // if (err) {
//     //     console.log(err);
//     // } else {
//     //     console.log(stdout);
//     //     // console.log(stderr);
//     // }
// });


// 2
// var hh = cp.spawn("node", ["lll.js"]);
// var result = "";
// hh.stdout.on("data", (chunk) => {
//     result += chunk;
// });

// hh.stdout.on("close", () => {
//     console.log(result);
// })


//3
var fork1 = cp.fork('lll.js', ['命令行参数']);
fork1.on("close", (chunk) => {
    console.log(chunk.toString());

})

fork1.on("message", (msg) => {
    console.log(msg);

});


