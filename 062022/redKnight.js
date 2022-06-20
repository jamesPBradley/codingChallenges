//p: two numbers
//r: array containing a string and number


function redKnight(n, p) {
    // define positions
    let nX = 0
    let nY = n;
    let pX = p

    // increment positions while pieces are not at same spot 
    while(nX!=pX) {
        nX += 2;
        pX++;
        nY > 0 ? nY-- : nY++;
    }
    return nY === 1 ? ['Black', nX] : ['White', nX];
}


console.log(redKnight(0, 8)) // ['White', 16]);
console.log(redKnight(0, 7)) // ['Black', 14]);
console.log(redKnight(1, 6)) // ['Black', 12]);
console.log(redKnight(1, 5)) // ['White', 10]);
