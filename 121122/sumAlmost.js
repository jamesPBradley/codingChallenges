// p: array
// r: number

function sumArray(arr) {
    return arr && arr.length > 1 ? arr.reduce((a,c)=>a+c,0)-Math.max(...arr)-Math.min(...arr) : 0;
}

console.log( sumArray(null)                     , 0 );
console.log( sumArray([ ])                      , 0 );
console.log( sumArray([ 3 ])                    , 0 );
console.log( sumArray([ 3, 5 ])                 , 0 );
console.log( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );