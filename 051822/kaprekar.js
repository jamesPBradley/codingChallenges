//P: number
//R: index

// I think this approach failed because i was expecting the index to always be half the length of the array (about half if odd length)

// function kaprekarSplit(n) {
//     //square num
//     let square = `${n**2}`;
//     console.log(square);
//     //split num into two arrays. create two new numbers.
//     let arr = square.split('');
//     console.log(arr);

//     // const first = arr.length%2 === 0 ? arr.slice(0,Math.floor(arr.length/2)).join('') : arr.slice(0,Math.floor((arr.length/2))).join('')
//     const first = Number(arr.slice(0,Math.floor((arr.length/2))).join(''));
//     const second = Number(arr.slice(Math.floor((arr.length/2))).join(''));
//     console.log([first,second])
//     // return [n,square,first, second];


//     //sum the two numbers. sum = num?
//     // return [first, second]
//     return (first + second) === n ? Math.floor((arr.length/2)) : -1;

//     //return index at which joining array would return values that sum to num
// }

function kaprekarSplit(n){
  const digits = (n**2).toString()
  
  let index = -1
  while(index++ < digits.length) {
    const first = digits.substring(0, index)
    const last = digits.substring(index)
    
    if (+first + +last === n)
      return index
    
  }
  
  return -1
}


console.log(kaprekarSplit(1)) // 0
console.log(kaprekarSplit(9)) // 1
console.log(kaprekarSplit(45)) // 2
console.log(kaprekarSplit(2223)) // 3
console.log(kaprekarSplit(5050)) // 4
console.log(kaprekarSplit(5051)) // -1
console.log(kaprekarSplit(99999)) // 5
