//p: string
//r: array

function last(str) {
    let arr = str.split(' ');
    let result = arr.sort((a,b) => {
        return a[a.length-1] < b[b.length-1] ? -1 :
        a[a.length-1] < b[b.length-1] ? 1 : 0    
    });
    return result;
}


console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);  