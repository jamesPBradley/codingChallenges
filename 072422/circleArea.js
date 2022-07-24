

//p: num
//r: num rounded to 2 decimal places, or false if <= 0

function circleArea(r) {
    return r > 0 && typeof r === 'number' ? +(Math.PI * r**2).toFixed(2) : false;
}


console.log(circleArea(-1485.86));    //returns false
console.log(circleArea(0));           //returns false
console.log(circleArea(43.2673));     //returns 5881.25
console.log(circleArea(68));          //returns 14526.72
console.log(circleArea("number"));    //returns false