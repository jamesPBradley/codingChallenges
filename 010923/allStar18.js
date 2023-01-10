// p: string,string
// r: number

function strCount(s1,s2) {
    // create a count variable
    let count = 0;
    // loop through string
    for(let i=0; i<s1.length; i++) {
        // every time element matches s2, increase count
        if(s1[i]==s2) {
            count++;
        }
    }
    // return count
    return count;
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);