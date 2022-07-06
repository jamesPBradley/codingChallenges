// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. 
// Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove(string) {
    // make it an array
    let input = string.split(' ');
    // count number of ! in each element
    let result = [];
    for(let i=0; i<input.length; i++) {
        let array = input[i].split('');
        let count = 0;
        for(let j=0; j<array.length; j++) {
            if(array[j] === '!') {
                count++;
            }
        }
    // if number is not equal to 1, delete element
        if(count != 1) {
            result.push(input[i]);
        }
    }
    return result.join(' ')
}

console.log(remove("Hi!")) // === ""
console.log(remove("Hi! Hi!")) // === ""
console.log(remove("Hi! Hi! Hi!")) // === ""
console.log(remove("Hi Hi! Hi!")) // === "Hi"
console.log(remove("Hi! !Hi Hi!")) // === ""
console.log(remove("Hi! Hi!! Hi!")) // === "Hi!!"
console.log(remove("Hi! !Hi! Hi!")) // === "!Hi!"