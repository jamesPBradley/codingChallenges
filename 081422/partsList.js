//arr
//arr

function partlist(arr) {
    // place first element in array, combine remaining elements and place in the array
    let result = [];
    // return arr.slice(0,1)
    for(let i=0; i<arr.length-1; i++) {
    // in subsequent loops, first element grows by 1, second element shrinks by one
        let first = arr.slice(0,i+1);
        let second = arr.slice(i+1);
        result.push([first.join(' '),second.join(' ')]);
    }
    return result;
}



console.log(partlist(["I", "wish", "I", "hadn't", "come"])); //[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])

console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])); // [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])

console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])); // [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
