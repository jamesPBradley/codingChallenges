


// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.





function divCon(x){
  let stringSum = x
                  .filter(element => typeof element === 'string')
                  .reduce((accum, current) => accum + +current, 0);
  let numSum = x
                .filter(element => typeof element === 'number')
                .reduce((accum, current) => accum + current, 0);
  
  return numSum - stringSum;
}