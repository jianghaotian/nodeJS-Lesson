if(process.argv[2] == undefined || process.argv[2] == '-h') {
    console.log("提示: 参数为一个数学运算式");
} else {    
    console.log("%s=%s", process.argv[2], eval(process.argv[2]));
}
