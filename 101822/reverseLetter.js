//p: string
//r: string

function reverseLetter(str) {
    // create variable holding letters
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return str
              // accomodate for case
              .toLowerCase()
              // filter for letters only
              .split('')
              .filter(s=>letters.includes(s))
              // reverse,rebuild string, and return
              .reverse()
              .join('');
}

console.log(reverseLetter("krishan"),"nahsirk")
console.log(reverseLetter("ultr53o?n"),"nortlu")
console.log(reverseLetter("ab23c"),"cba")
console.log(reverseLetter("krish21an"),"nahsirk")