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