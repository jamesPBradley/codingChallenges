//p: string
//r: string

function greet(name) {
    // set name to lowercase
    let str = name.toLowerCase();
    return str[0].toUpperCase();
    // return template string with first letter of name capitalized
    return `Hello ${str[0].toUpperCase()}${str.slice(1,str.length)}!`
}

console.log(greet('riley'), 'Hello Riley!');
