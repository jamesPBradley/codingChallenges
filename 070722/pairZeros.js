

//p: array
//r: array

function pairZeros(arr) {
    // don't mutate input
    let input = [...arr];
    // set up loop
    let count = 0;
    for(let i=0; i<input.length; i++) {
        // if zero encountered, increase count
        if((input[i] === 0) && (count === 0)) {
            count++;
        // if zero encountered while counter > 0, delete that element
        }else if((input[i] === 0) && (count === 1)) {
            input.splice(i,1);
            count--;
            i--;
        }
    }
    // return array
    return input;
}


console.log(pairZeros([1])) //[1])
console.log(pairZeros([0,0])) //[0])
console.log(pairZeros([0,0,0])) //[0,0])
console.log(pairZeros([1,0,1,0,2,0,0,3,0])) //[1,0,1,2,0,3,0])
