
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)


function getNumberFromString(s) {
  let result = '';
  for(let i=0; i<s.length; i++) {
    let nums = '0123456789'
    if(nums.includes(s[i])) {
      result += s[i];
    }
  }
  return +result;
}