
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


function powersOfTwo(n){
//   create array
  let powArray = [];

//   raise 2 to the n power and place in array
  for(let i = 0; i<=n; i++) {
    let product = 2**i;
    powArray.push(product);
  }
// return the array
  return powArray;
}