//p: string, num
//r: string

function splitInParts(str,n) {
    // make str an array
    const arr = str.split('');
    // loop through array
    // create a variable storing characters from array
    let result = [];
    let count = 1;
    for(let i=0; i<arr.length; i++) {
        result.push(arr[i]);
        // every n character stored should be followed by a space
        if(count < n) {
            count++;
        }else if(count === n && i<arr.length-1) {
            result.push(' ');
            count = 1;
        }
    }
    // join and return the variable created
    return result.join('');
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
console.log(splitInParts("HelloKata", 1), "H e l l o K a t a")
console.log(splitInParts("HelloKata", 9), "HelloKata")