

// Math.roundTo = function (number, precision) {
//   return Number(number.toFixed(precision));
// }

Math.roundTo = function (number, precision) {
  return Math.round(number*Math.pow(10,precision))/Math.pow(10,precision);
}


console.log(Math.roundTo(3.1415926535, 4))
console.log(Math.roundTo(4, 5))
console.log(Math.roundTo(4.1235343424, 6))
console.log(Math.roundTo(5.3035802, 3))
console.log(Math.roundTo(0.9384930193848595, 15))
console.log(Math.roundTo(9.9999, 3))
