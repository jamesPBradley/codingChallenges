


//p: object
//r: array

function myLanguages(obj) {
    // make an array from the languages with scores matching the condition
    let arr = [];
    for(let lang in obj) {
        if(obj[lang] >= 60) {
            arr.push(lang);
        }
    }
    // sort the scores
    // return the array
    return arr.sort((a,b) => {
        return obj[a] > obj[b] ? -1 : 1;
    });
}


console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})); // ["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})); // ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})); // [])
