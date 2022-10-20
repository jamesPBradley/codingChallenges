//p: array
//r: array

function openOrSenior(arr) {
    // loop through array, check each element for nums >= 55 and > 7
    return arr.map(e=>`${e[0]>=55 && e[1]>7 ? 'Senior' : 'Open'}`);
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])