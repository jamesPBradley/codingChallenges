// p: string
// r: string

function removeExclamationMarks(str) {
    return str.split('!').join('');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");
