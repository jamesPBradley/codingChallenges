

// m = candy
// n = children


//p: integers
//r: array of integers

// function distribute(m,n) {
//     // handle parameter values
//     if(n <= 0) {
//         return [];
//     }
//     // create an array with n many indexes
//     let result = [];
//     for(let i = 0; i<n; i++) {
//         result.push(0);
//     }
//     // iterate through the array, increasing each index value by 1 at a time for as many pieces of candy as are available
//     // if m > n, increase every array position by 1. Then, increase one position for each candy remaining
//     if(m>=n) {
//         let min = Math.floor(m/n);
//         let remains = m-n;
//         for(let i=0; i<result.length; i++) {
//             result[i] = min;
//         }
//         while(remains > 0) {
//             result[remains]++;
//             remains--;
//         }
//     }
//     if(m<n) {
//         let candy = m;
//         while(candy > 0) {
//             result[candy]++;
//             candy--;
//         }
//     }
//     return result;
// }

function distribute(m, n) {
    if (n <= 0) return [];
     const candy = Array(n).fill(0);
     if (m <= 0) return candy;
     while(m > 0) {
       for (let i = 0; i < candy.length; i++) {
         candy[i]++;
         m--;
         if (m === 0) break;
       }
     }
    return candy;
}



console.log(distribute(-5, 10).sort((a,b)=>a-b)) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 0, 10).sort((a,b)=>a-b)) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 5, 10).sort((a,b)=>a-b)) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
console.log(distribute(10, 10).sort((a,b)=>a-b)) // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(distribute(15, 10).sort((a,b)=>a-b)) // [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
console.log(distribute(-5,  0)) // []);
console.log(distribute( 0,  0)) // []);
console.log(distribute( 5,  0)) // []);
console.log(distribute(10,  0)) // []);
console.log(distribute(15,  0)) // []);
console.log(distribute(-5, -5)) // []);
console.log(distribute( 0, -5)) // []);
console.log(distribute( 5, -5)) // []);
console.log(distribute(10, -5)) // []);
console.log(distribute(15, -5)) // []);
