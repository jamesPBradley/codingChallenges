
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
