// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  let array = n.toString().split('');
  while(array[array.length-1]==0) {
    array.splice(array.length-1,1);
  }
  return Number(array.join(''));
}