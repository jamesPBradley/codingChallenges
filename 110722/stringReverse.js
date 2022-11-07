// p: string
// r: string

// add method to string prototype
String.prototype.reverse = function() {
    // create an array, reverse it, create string
    // return string
    return this.split('').reverse().join('');
}

// add method to string prototype
String.prototype.reverse = function() {
    // create an array, reverse it, create string
    let str = '';
    for(let i=this.length-1; i>=0; i--) {
        str += this[i];
    }
    // return string
    return str;
}


console.log("gnirtS".reverse());
console.log("gnirts rehtonA".reverse());