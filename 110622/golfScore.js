// p: string
// r: number

function golfScoreCalculator(par,strokes) {
    // create variable storing score
    let score = 0;
    // create arrays
    const parA = par.split('').map(e=>+e); 
    const strokesA = strokes.split('').map(e=>+e);
    // iterate through arrays
    for(let i=0; i<parA.length; i++) {
        // subtract current element of parr arr from current element in strokes array, add that value to score
        score += strokesA[i]-parA[i];
    }
    // return score
    return score;
}


console.log(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
console.log(golfScoreCalculator('123456123456123456', '123456123456123456'), 0);