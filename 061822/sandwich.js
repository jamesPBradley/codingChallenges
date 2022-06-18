// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
// All used elements will be primitive.


//p: array
//r: array

function duplicateSandwich(a) {
    // don't mutate input
    let array = a;
    // input validation
    let type = typeof a;

    // grab first element of array. compare following elements to it, adding a duplicate to an array
    let duplicate = [];
    for(let i=0; i<array.length; i++) {
        let check = array[i];
        for(let j=i+1; j<array.length; j++) {
            // duplicate.push(array[j])
            if(array[j] === check) {
                duplicate.push(check);
            }
        }
    }
    // find indexes of duplicate values
    const first = array.indexOf(duplicate[0]);
    const last = array.lastIndexOf(duplicate[0]);
    // return all values between those indexes
    let result = [];
    for(let i=first+1; i<last; i++) {
        result.push(array[i]);
    }
    return type === 'string' ? result.join('') : result;
}


console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])) // [2, 3, 4, 5, 6] );
console.log(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])) // ["Hello", "Example", "hello"] );
console.log(duplicateSandwich([0, 0])) // [] );
console.log(duplicateSandwich( [true, false, true])) // [false] );
console.log(duplicateSandwich("example")) // "xampl" );
