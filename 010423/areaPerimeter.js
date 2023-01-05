// p: number, number
// r: number

function areaOrPerimeter(l,w) {
    return l===w ? l*w : 2*l + 2*w;
}

console.log(areaOrPerimeter(3,  3),  9);
console.log(areaOrPerimeter(6, 10), 32);