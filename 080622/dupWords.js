

//p: string
//r: string

function removeDuplicateWords(s) {
    //make string an array of words
    let arr = s.split(' ');
    //make a set and place it into an array
    //make array a string and return it
    return [...new Set(arr)].join(' ');
}


console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // 'alpha beta gamma delta');
