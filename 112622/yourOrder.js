// p: string
// r: string


function order(str) {
    // make string an array
    let arr = str.split(' ');
    // make a second array holding numbers from each word
    let numbers = arr
                      .map(e=>e.split('').filter(e=>'1234567890'.includes(e))
                      .join(''))
                      // sort the second array in ascending order
                      .sort();
    // pass elements in first array into second array, if it contains that element, add it to the third array
    // return the array
    return numbers
                   .map(e=>arr.filter(f=>f.includes(e)))
                   .join(' ');
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string" )