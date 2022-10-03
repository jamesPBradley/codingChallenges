// p: string
// r: string

function switcher(str) {
    // create variable holding alphabet and special characters
    const chars = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse();
    // account for index 0
    let nums = str.map(s=>+s-1);
    // loop through input using values to build a new string
    let result = '';
    for(let i=0; i<nums.length; i++) {
        result += chars[nums[i]];
    }
    // return the string
    return result;
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
console.log(switcher(['4', '24']), 'wc'); 