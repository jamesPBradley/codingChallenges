// p: string
// r: string

function alternateCase(str) {
    // create variable to hold string
    let result = '';
    // loop through input
    for(let i=0; i<str.length; i++) {
        // compare character to a case
        // swap case and add it to the variable
        result += str[i]===str[i].toLowerCase() ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    // return variable
    return result;
}

console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD"); 