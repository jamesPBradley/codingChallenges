// p: number,number
// r: array

function squares(x,n) {
    // make a variable holding an array
    let arr = [];
    // make a variable holding value in x
    let value = x;
    // create a loop where variable is pushed to the array, then squared. loop n times
    for(let i=0; i<n; i++) {
        arr.push(value);
        value = value**2;
    }
    // return the array
    return arr;
}

console.log(squares(2,5),[2,4,16,256,65536]);   
console.log(squares(3,3),[3,9,81]);  
console.log(squares(5,3),[5,25,625]);  
console.log(squares(10,4),[10,100,10000,100000000]);  