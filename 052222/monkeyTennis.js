
//P: array of nums >= 58
//R: object with weight property value is num

function ballCollector(detritus) {
    let ballWeight = detritus
                             .filter(element => element === 58)
                             .reduce((accum,current) => accum + current,0);
    
    sack.weight = ballWeight;
    return sack;
}


console.log(ballCollector([58, 68, 62, 69, 58])) // { weight: 116 }
console.log(ballCollector([60,66,71,68,62])) // { weight: 0 }
console.log(ballCollector([58])) // { weight: 58 }
console.log(ballCollector([58, 58, 58])) // { weight: 174 }