var base64Str = 'emhhbmdzYW46MTIzNDU';

console.log(Buffer.from(base64Str, "base64").toString("utf8"));
