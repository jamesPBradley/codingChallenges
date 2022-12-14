// p: number
// r: array of numbers

function humanYearsCatYearsDogYears(n) {
    // create a variable holding an array
    // first element is human years = n
    let result = [n];
    // second element is cat years = 15 + 9 + 4n-2
    // thrid element is dog years = 15 + 9 + 5n-2
    for(let i=1; i<=n; i++) {
        if(i==1) {
            result.push(15);
            result.push(15);
        }else if(i==2) {
            result[1] += 9;
            result[2] += 9;
        }else {
            result[1] += 4;
            result[2] += 5;
        }
    }
    return result;
}

console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);