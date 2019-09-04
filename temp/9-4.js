// consolelog.js
// var user = {
//     username: "zhangsan",
//     age: 20,
//     qq: "11111111"
// }

// console.log("username: %s", user.username);
// console.log("age: %d", user.age);
// console.log("user: %j", user)

// consoletime.js

// console.time("test")
// function aa(){
//     var sum = 0;
//     for(var i = 0; i < 10000; i++) {
//         for(var j = 0; j < 100; j++){
//             sum += i * j;
//         }
//     }
//     // console.log(sum);
//     return sum;
// }
// aa();
// console.timeEnd("test")

// processinfor.js
// console.log(process.pid);
// console.log(process.platform);
// console.log(process.argv);
// console.log(process.cwd());

// processstd.js

process.stdin.on("data", function(data) {
    console.log(data);
})



