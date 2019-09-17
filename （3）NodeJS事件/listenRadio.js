const radio = require("./radio.js");
const Radio = radio.Radio;

var r = new Radio('music radio', 'FM 106.7');

r.on("play", r.play);
r.on("stop", r.stop);

r.emit('play');

setTimeout(function() {
    r.emit('stop');
}, 2000);


