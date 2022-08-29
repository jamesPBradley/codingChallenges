//p: string
//r: array

function capitalize(str) {
    // make the string an array
    // create two variables storing arrays with capital letters from even and odd indexes from the string
    const evens = str.split('').map((l,i)=> i%2===0 ? l.toUpperCase() : l).join('');
    const odds = str.split('').map((l,i)=> i%2>0 ? l.toUpperCase() : l).join('');
    return [evens,odds];
}


console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);