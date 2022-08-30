//p: string
//r: boolean

function isIsogram(str) {
    // split string into array
    let arr = str.split('').map(l=>l.toLowerCase());
    // create a set from the array
    let unique = [...new Set(arr)].map(l=>l.toLowerCase());
    // compare the set to the first array
    return arr.join('') === unique.join('');
}


console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );