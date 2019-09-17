const stream = require("stream");

function MyReadable() {
    stream.Readable.call(this);
}

MyReadable.prototype.__proto__ = stream.Readable.prototype;

var reader = new MyReadable();


for(var i = 0; i < 26; i++) {
    reader.push(String.fromCharCode('a'.charCodeAt() + i));
}
reader.push(null);

reader.pipe(process.stdout);
