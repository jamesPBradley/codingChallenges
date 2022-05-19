// P: string
// R: number

function binToDec(bin){
    let inputArr = bin.split('').reverse();
    let multiple = 1;
    let binaryArr = []
    for(let i=0; i<inputArr.length; i++) {
        binaryArr.push(multiple);
        multiple *= 2;
    }
    let total = 0;
    for(let i=0; i<inputArr.length; i++) {
        if(inputArr[i] > 0) {
            total += binaryArr[i]*inputArr[i];
        }
    }
    return total;
}

console.log(binToDec('1')) // 1
console.log(binToDec('0')) // 0
console.log(binToDec('1001001')) // 73