//p: string
//r: num

function solve(str) {
    // create a variable holding vowels
    const vowels = 'aeiouAEIOU';
    let arr = str
                // split string into array
                 .split('')
                // replace non vowels with spaces
                 .map(e=>vowels.includes(e) ? e : ' ')
                // create new array that combines sequential letters
                 .join('').split(' ')
                //  create array of of string lengths
                 .map(e=>e.length);
    // return longest string length
    return Math.max(...arr);
}


console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);