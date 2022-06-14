//p: num
//r: num

function doubleton(num) {
    // don't mutate input
    let input = num;
    // make number an array
    let array = input.toString().split('');
    // place each unique value into a new array
    let chars = [];
    let setChars = function() {
        for(let i=0; i<array.length; i++) {
            if(chars.indexOf(array[i]) === -1) {
                chars.push(array[i]);
            }else {
                continue;
            }
        }
    }
    // if chars length does not equal 2, increase input by 1, update and check chars again, otherwise convert the array to a num and return the num
    let updateChars = function() {
        input++;
        array = input.toString().split('');
        chars = [];
        setChars();
    }

    setChars();
    updateChars();

    while(chars.length !==2) {
        updateChars();
    }
    return Number(array.join(''));
}


console.log(doubleton(120)) // === 121
console.log(doubleton(1234)) // === 1311
console.log(doubleton(1)) // === 10
console.log(doubleton(10)) // === 12