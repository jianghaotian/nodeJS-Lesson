const Dog = require("./dog.js");

var taidi = new Dog("taidi", 4);
var zangao = new Dog("zangao", 8);


taidi.on("bark", function() {
    console.log(this.name, "barked! energy:", this.energy);
})

zangao.on("bark", function() {
    console.log(this.name, "barked! energy:", this.energy);
})