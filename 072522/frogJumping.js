//p: array of integers
//r: number

function solution(a) {
    let result = 0;
    let i = 0;
    // iterate through arr for as long as a[i] exists
    while(typeof a[i] !== 'undefined') {
        i+=a[i];
        result++;
        // return -1 if result exceeds arr length or is less than 0
        if(result > a.length || result < 0) {
            return -1;
        }
    }
    // return number of loop iterations
    return result;
}



// function solution(a) {
//     var c = 0, i = 0;
  
//     while (typeof a[i] !== 'undefined') {
//       c++;
//       i += a[i];
      
//       if (c > a.length) {
//         return -1;
//       }
//     }
  
//     return a.length ? c : -1;
//   }

console.log(solution([1, 2, 2, -1])); // 4);
console.log(solution([1, 2, 1, 5])); // 3);
console.log(solution([1, 1, 1, 1])); // 4);
console.log(solution([1, -1])); // -1);
console.log(solution([-3])); // 1);
