

//p: string
//r: string

// function accum(s) {
//     // split string into array by letter
//     let arr = [...s.toLowerCase()];
//     // iterate through the array, updating each element to reflect the requested pattern
//     let result = ''
//     for(let i=0; i<arr.length; i++) {
//         let j = i+1
//         while(j>0) {
//             // last letter always followed by hyphen unless j=1 and i = arr.length-1
//             // first letter always capitalized
//             if(j===1 && i===arr.length-1) {
//                 result += `${arr[i]}`;
//             }else if(j===1 && i===0) {
//                 result += `${arr[i].toUpperCase()}-`;
//             }else if(j===i+1){
//                 result += `${arr[i].toUpperCase()}`;
//             }else if(j===1) {
//                 result += `${arr[i]}-`;
//             }else {
//                 result += `${arr[i]}`;
//             }
//             j--;
//         }
//     }
//     return result;
// }

// function accum(s) {
//     // split string into array by letter
//     let arr = [...s.toLowerCase()];
//     // iterate through the array, updating each element to reflect the requested pattern
//     let result = ''
//     for(let i=0; i<arr.length; i++) {
//         let j = i+1
//         while(j>0) {
//             // last letter always followed by hyphen unless j=1 and i = arr.length-1
//             // first letter always capitalized
//             j===1 && i===arr.length-1 ? result += `${arr[i]}` :
//                        j===1 && i===0 ? result += `${arr[i].toUpperCase()}-` :
//                               j===i+1 ? result += `${arr[i].toUpperCase()}` :
//                                 j===1 ? result += `${arr[i]}-` : result += `${arr[i]}`;

//             j--;
//         }
//     }
//     return result;
// }

function accum(s) {
    return s
            // make string an array
            .split('')
            // map over array where each element starts with an upper case letter, followed by repeated lowercase letters
            .map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
            // combine elements into a string separating each element with a hyphen
            .join('-');
}
 
console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
