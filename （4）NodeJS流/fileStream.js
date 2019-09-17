const fs = require("fs");
const path = require("path");
const stream = require("stream");

var fromPath = path.join(__dirname, "/from.txt");
var toPath = path.join(__dirname, "/to.txt");
var fromStreamReadr = fs.createReadStream(fromPath);
var toStreamReadr = fs.createWriteStream(toPath);

var data = '';

fromStreamReadr.on('data', function(chunk) {
    data += chunk;
});
 
fromStreamReadr.on('end',function(){
    var reader = stream.Readable();
    reader.push(data.toUpperCase());
    reader.push(null);

    reader.pipe(toStreamReadr);
});
