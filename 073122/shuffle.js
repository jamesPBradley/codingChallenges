

//p: arr
//r: arr

function shuffle(arr) {
    // use sort and make return value random between -1 and 1
    return arr.sort((a,b) => -1 + (Math.random() >= 0.5 ? 1 : 0))
}

console.log(shuffle([1,2,3,4]));