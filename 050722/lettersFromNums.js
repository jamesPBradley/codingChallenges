
// You have to create a function that converts integer given as string into ASCII uppercase letters.

// All ASCII characters have their numerical order in table.

// For example,

// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.

// For example,

// '658776' to [65, 87, 76] and then turn it into 'AWL'.

function convert(number){
  let nums = number.split('');
  let twoDigitNums = [];
  
  for(let i=0; i<nums.length; i++) {
    if(i%2===0) {
      twoDigitNums.push(`${nums[i]}${nums[i+1]}`);
    }
  }
  
  return twoDigitNums.map(element => String.fromCharCode(element)).join('');
}