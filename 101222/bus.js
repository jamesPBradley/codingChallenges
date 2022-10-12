// p: arr
// r: num

function number(arr) {
    return arr
              // combine all arrays
              .reduce((accum,curr)=>accum.concat(curr),[])
              // add even indexes, subtract odd indexes from that total
              .reduce((accum,curr,i)=> i%2===0 ? accum+curr : accum-curr,0);
}

console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);