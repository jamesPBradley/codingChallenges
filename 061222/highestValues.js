


// p: array
// r: array

function twoHighest(arr) {
    let input = arr;
    let result = [];

    input.sort((a,b) => b-a)
    for(let j=0; j<input.length-1; j++) {
        if(input[j] === input[j+1]) {
            input.splice(j,1);
            j--;
        }
    }

    if(arr.length >= 2) {
        let i=0;
        while(i<2) {
            result.push(Math.max(...input));
            maxIndex = input.indexOf(Math.max(...input))
            input.splice(maxIndex, 1);
            i++;
        }
        return result;
    }else {
        return arr;
    } 
}



console.log(twoHighest([])) //, [])
console.log(twoHighest([15])) //, [15])
console.log(twoHighest([15, 20, 20, 17])) //, [20, 17])
