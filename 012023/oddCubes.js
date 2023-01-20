// p: array
// r: number

function cubeOdd(arr) {
    return arr.every(e=> typeof e == 'number') ? 
           arr.reduce((a,c)=>a+(c**3%2==0 ? 0 : c**3),0) : 
           undefined;
}


console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);