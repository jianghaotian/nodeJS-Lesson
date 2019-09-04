
if(process.argv[2] != undefined) {
    console.log("%s=%s", process.argv[2], eval(process.argv[2]));
} else {
    console.log("命令行参数错误!");
}
