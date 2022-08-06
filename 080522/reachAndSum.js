

//p: array
//r: num

function sumDigNthTerm(initVal, patternL, nthTerm) {
    let result = initVal;
    let i=0
    // keep track of term
    let iterations = 0
    // increase initVal by nth term in patternL
    while(iterations<nthTerm) {
        // reset i for cyclical flow through array
        if(i>patternL.length-1) {
            i = 0;
        }
        // term1 = initVal
        if(iterations===0) {
            iterations++;
            continue;
        }
        // add initVal and nth term in patternL
        result += patternL[i];
        // increment i
        i++;
        // count iterations
        iterations++;
    }
    return result.toString().split('').reduce((a,c) => a + +c,0);
}


console.log(sumDigNthTerm(10, [2, 1, 3], 6)); // 10);
console.log(sumDigNthTerm(10, [2, 1, 3], 15)); // 10);
console.log(sumDigNthTerm(10, [2, 1, 3], 50)); // 9);
console.log(sumDigNthTerm(10, [2, 1, 3], 78)); // 10);
console.log(sumDigNthTerm(10, [2, 1, 3], 157)); // 7);
