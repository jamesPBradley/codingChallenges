
//P: num
//R: string

function stringy(size) {
    let result = [1];
    while(result.length < size) {
        result[result.length-1] === 1 ? result.push(0) : result.push(1);
    }
    return result.join('').toString();
}


console.log(stringy(6)); // '101010'
console.log(stringy(4)); // '1010'
console.log(stringy(12)); // '101010101010'
