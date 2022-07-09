//p: string, string
//num

function countChar(string, char) {
    return string
                // account for case
                .toLowerCase()
                // make it easier to manipulate string
                .split('')
                // filter for every character matching input, case accounted for
                .filter(element => element === char.toLowerCase())
                // returns number of matching characters in the array
                .length;
}


console.log(countChar("fizzbuzz","z")); // => 4
console.log(countChar("Fancy fifth fly aloof","f")); // => 5