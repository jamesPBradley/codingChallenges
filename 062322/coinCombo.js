


//p: num
//r: array of nums


function coinCombo(cents) {
    // don't mutate input
    let input = cents;
    // initial state
    let output = [0,0,0,0];
    // increase corresponding index value according to input size
    while(input > 0) {
        if(input - 25 >= 0) {
            output[3]++;
            input -= 25;
        }else if(input - 10 >= 0) {
            output[2]++;
            input -= 10;
        }else if(input - 5 >= 0) {
            output[1]++;
            input -= 5;
        }else if(input - 1 >= 0) {
            output[0]++;
            input--;
        }
    }
    return output;
}


console.log(coinCombo(1)); // [1, 0, 0, 0]);
console.log(coinCombo(2)); // [2, 0, 0, 0]);
console.log(coinCombo(5)); // [0, 1, 0, 0]);
console.log(coinCombo(6)); // [1, 1, 0, 0]);
console.log(coinCombo(10)); // [0, 0, 1, 0]);
console.log(coinCombo(11)); // [1, 0, 1, 0]);
console.log(coinCombo(15)); // [0, 1, 1, 0]);
console.log(coinCombo(17)); // [2, 1, 1, 0]);
console.log(coinCombo(25)); // [0, 0, 0, 1]);
console.log(coinCombo(30)); // [0, 1, 0, 1]);
console.log(coinCombo(36)); // [1, 0, 1, 1]);
console.log(coinCombo(43)); // [3, 1, 1, 1]);
