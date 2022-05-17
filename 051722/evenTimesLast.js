//P: array of integers
//R: num

function evenLast(numbers) {
    let evenIndexes = numbers.filter((element,index) => index%2===0)
    return numbers.length > 1 ? 
           evenIndexes.reduce((accum,current) => accum + current,0)*numbers[numbers.length-1] : 0;
}

console.log(evenLast([2,3,4,5])) // 30;

