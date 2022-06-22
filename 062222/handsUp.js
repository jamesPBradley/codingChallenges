

// let arr = [
//     [0, 0, 0],
//     [1, 0, 0],
//     [2, 0, 0],
//     [0, 1, 0],
//     [1, 1, 0],
//     [2, 1, 0],
//     [0, 2, 0],
//     [1, 2, 0],
//     [2, 2, 0],
//     [0, 0, 1],
//     [1, 0, 1],
//     [2, 0, 1],
//     [0, 1, 1],
//     [1, 1, 1],
//     [2, 1, 1],
//     [0, 2, 1],
//     [1, 2, 1],
//     [2, 2, 1],
//     [0, 0, 2],
//     [1, 0, 2],
//     [2, 0, 2],
//     [0, 1, 2],
//     [1, 1, 2],
//     [2, 1, 2],
//     [0, 2, 2],
//     [1, 2, 2],
//     [2, 2, 2],
// ]

//p: num
//r: array of three nums

// function getPositions(s) {
//     // initial state
//     let p1 = 0;
//     let p2 = 0;
//     let p3 = 0;
//     let i = 1;
//     while(i<=s) {
//         // person 3 behavior
//         if(p1 === 2 && p2 === 2 && p3 === 2) {
//             p3 = 0;
//         }else if(p1 === 2 && p2 === 2) {
//             p3++;
//         }
//         // person 2 behavior
//         if(p1 === 2 && p2 === 2) {
//             p2 = 0;
//         }else if (p1 === 2 ) {
//             p2++;
//         }
//         // person 1 behavior
//         p1 === 2 ? p1 = 0 : p1++;

//         i++;
//     }
//     return [p1,p2,p3];
// }

const getPositions = s => {
    return [(s % 3), Math.floor(s/3) % 3, Math.floor(s/9) % 3];
}



console.log(getPositions(54)) // [0, 0, 0]);
console.log(getPositions(98)) // [2, 2, 1]); 
console.log(getPositions(3)) // [0, 1, 0]);
