//p: string
//r: array

function solve(arr) {
    // make alphabet variable
    const a = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    let count = 0;
    // loop through string, comparing index of each char to corresponding char index in alphabet var
    for(let i=0; i<arr.length; i++) {
        count = 0;
        for(let j=0; j<arr[i].length; j++) {
            let str = arr[i].toLowerCase();
        // place matches in return variable
            if(str[j] === a[j]) {
                count++;
            }
        }
        result.push(count);
    }
    // return arr
    return result;
}

console.log(solve(["abode","ABc","xyzD"]),[4,3,1]);
console.log(solve(["abide","ABc","xyz"]),[4,3,0]);
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
console.log(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);