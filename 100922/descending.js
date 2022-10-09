//p: num
//r: num

function descendingOrder(n) {
    // make parameter a string
    return +`${n}`
                  //  split string into an array
                  .split('')
                  //   make each element in array a num
                  .map(e=>+e)
                  //   sort nums in descending order
                  .sort((a,b)=>b-a)
                  //   combine nums and return
                  .join('');
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(111), 111)
console.log(descendingOrder(15), 51)
console.log(descendingOrder(1021), 2110)
console.log(descendingOrder(123456789), 987654321)