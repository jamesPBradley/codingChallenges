//p: string, string
//r: num

// function hammingDistance(a,b) {
//     // set up loop. if string characters do not match at same index, increase distance
//     let distance = 0;
//     for(let char in a) {
//         if(a[char] === b[char]) {
//             continue;
//         }else {
//             distance++;
//         }
//     }
//     return distance;
// }


function hammingDistance(a,b) {
    // make an array, loop over it comparing each element to characters in the other string
    return a.split('').filter((e,i) => e !== b[i]).length;
}

console.log(hammingDistance('', '')); // 0)
console.log(hammingDistance('100101', '101001')); // 2)
console.log(hammingDistance('1010', '0101')); // 4)
console.log(hammingDistance('100101011011010010010', '101100010110010110101')); // 9)
