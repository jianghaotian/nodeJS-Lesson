var i = 0;
var str = ['name:', 'email:', 'qq:', 'mobile:'];

console.log(str[i]);
process.stdin.setEncoding('utf8');
process.stdin.on("data", function(data) {
    if(i < 3) {
        str[i] = data;
        i++;
        console.log(str[i]);
    } else {
        str[i] = data;
        var user = {
            name: str[0],
            email: str[1],
            qq: str[2],
            mobile: str[3]
        }
        console.log(user);
        process.exit();
    }
});


// 2
// var obj = {};
// var message = ["Name", "Email", "QQ", "Mobile"];
// var i = 0;
// console.log(message[0] + ":");
// process.stdin.on("data", function(data) {
//     obj[message[i-1]] = data.toString("utf8");
//     if(i == 4) {
//         console.log(obj);
//         process.exit();
//     } else {
//         console.log(message[i++] + ":");
//     }
// })