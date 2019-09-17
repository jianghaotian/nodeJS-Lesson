const util = require('util');
const events = require('events');
const EventEmitter = events.EventEmitter;

function Radio(name, hz) {
    this.name = name;
    this.hz = hz;
    EventEmitter.call(this);


    this.play = function() {
        console.log(this.name, this.hz, "opened");
        setTimeout(function() {
            console.log("lalala...");
        }, 2000);
    }

    this.stop = function() {
        console.log(this.name, this.hz, "closed");
    }



}
util.inherits(Radio, EventEmitter);
// Radio.prototype.__proto__ = EventEmitter.prototype;


module.exports = {
    Radio: Radio
}