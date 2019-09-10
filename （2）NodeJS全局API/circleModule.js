// 5
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


// 6
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