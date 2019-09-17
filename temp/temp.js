const http=require("http");
const path=require("path");
const fs=require("fs");
var name=process.argv[2];
var filePath=path.join(__dirname,"/"+name);
http.createServer((req,res)=>{
    if(name==undefined){
        filePath=path.join(__dirname,"/temp.js");
    }
    fs.open(filePath,(err,fid)=>{
        if(err){
            console.log(err);
        }
        else{
            var len=fs.statSync(filePath).size;
            var buf=Buffer.alloc(len);
            fs.read(fid,buf,0,len,0,(err, bytesRead, buffer)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.write(buffer.toString());
                    res.end();
                    // console.log(filePath);
                }
                fs.close(fid,(err)=>{
                    if(err){
                        console.log(err);
                    }
                });         
            });
        }
    });   
}).listen(8081);