//p: string
//r: string



function cleanString(str) {
    let arr = str.split('');
    let result = [];
    // add element from arr to result
    // if element = #, delete the last element added
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '#') {
            result.pop();
        }else {
            result.push(arr[i]);
        }
    }
    return result.join('');
}



// console.log(cleanString('abc#d##c')); // 'ac');
// console.log(cleanString('abc####d##c#')); // '');

console.log(cleanString("abc#d##c")); //      ==>  "ac"
console.log(cleanString("abc##d######1")); //  ==>  ""
console.log(cleanString("#######")); //       ==>  ""
console.log(cleanString("")); //             ==>  ""
