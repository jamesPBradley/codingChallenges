//p: string, arr
//r: boolean

function containAllRots(str,arr) {
    // if str is empty return true
    if(str==='') {
        return true;
    }
    // create an array of all rotations
    let rots = [str];
    for(let i=0; i<str.length-1; i++) {
        // let letter = rots[i].split('').pop();
        let letter = rots[i][rots[i].length-1];
        rots.push(letter + rots[i].substring(0,rots[i].length-1));
    }
    // determine if all rot values exist in the input arr
    return rots.every(e=>arr.includes(e));
}

console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)