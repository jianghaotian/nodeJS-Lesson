// function sayHello() {
//     console.log("hello");
// }

// function showName() {
//     console.log(userName);
// }

// var userName = "zhangsan";

// module.exports = {
//     sayHello: sayHello
// }


// function cicleFun(r) {
//     function circumference() {
//         return 2 * Math.PI * r;
//     }
//     function area() {
//         return Math.PI * r * r;
//     }

//     return {circumference: circumference, area: area}

// }

// module.exports = {
//     cicleFun: cicleFun
// }





function circumference(r) {
    return 2 * Math.PI * r;
}
function area(r) {
    return Math.PI * r * r;
}

module.exports = {
    circumference: circumference,
    area: area
}
