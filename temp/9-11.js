var events = require("events");

// 1
// var enentEmitter = new events.EventEmitter();

// enentEmitter.on('hello', function(arg1, arg2) {
//     console.log("hello world");
//     console.log(arg1, arg2);
// });

// enentEmitter.emit('hello', 'node', 'js');


// 2
const EventEmitter = events.EventEmitter;

function Dog(dogName) {
    EventEmitter.call(this);
    this.dogName = dogName;
    var that = this;
    setTimeout(function() {
        that.emit("bark");
    }, 3000);
}
Dog.prototype.__proto__ = EventEmitter.prototype;

var dog = new Dog("kitty");
dog.on("bark", function() {
    console.log(this.dogName, "can bark");
})


// 3


