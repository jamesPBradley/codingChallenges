// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8


function pipeFix(numbers){
  numbers.sort((a,b) => a-b);
  let min = numbers[0];
  let max = numbers[numbers.length-1];
  let array = [];
  for(i=min; i<=max; i++) {
    array.push(i);
  }
  return array;
}