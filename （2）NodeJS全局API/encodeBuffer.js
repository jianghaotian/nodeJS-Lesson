var username = process.argv[2];
var password = process.argv[3];

if (username != undefined && password != undefined) {
    console.log("用户名:%s 密码:%s", username, password);
    console.log("base64加密: %s", Buffer.from(username + password, "utf8").toString("base64"));
} else {
    console.log("用户名密码错误!");
}
