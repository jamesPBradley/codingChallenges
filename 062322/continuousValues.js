

//p: array of nums
//r: array of num(s)

function onesCounter(input) {
    let result = [];
    let counter = 0;

    for(let i=0; i<input.length; i++) {
        if(input[i] === 1) {
            counter++;
        }else if(counter > 0) {
            result.push(counter);
            counter = 0;
        }
        if(input.length - i === 1 && input[i] === 1) {
            result.push(counter);
        }
    }

    return result;
}


console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0])) // [])
console.log(onesCounter([1,1,1,1,1])) // [5])
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])) // [3, 1, 2])
console.log(onesCounter([0, 0, 0, 1, 0, 0, 1, 1])) // [1, 2])
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])) // [1, 2, 4, 1])
