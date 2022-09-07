//p: string
//r: string

function alphabetWar(str) {
    // make an object for left side and an object for right side with properties corresponding to each letter and associated point value
    const left = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1
    }
    const right = {
        'm': 4,
        'q': 3,
        'd': 2,
        'z': 1
    }

    // loop through the string and if the letter exists in the object, add its point value to corresponding left and right variables
    let lTotal = 0;
    let rTotal = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] in left) {
            lTotal += left[str[i]];
        }
        if(str[i] in right) {
            rTotal += right[str[i]];
        }
    }
    // return a string based on the comparison between the two values
    return lTotal > rTotal ? 'Left side wins!' :
           rTotal > lTotal ? 'Right side wins!' : 'Let\'s fight again!';
}
console.log( alphabetWar('hlbtyl'), "Left side wins!" );
// console.log( alphabetWar("z") , "Right side wins!" );
// console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
// console.log( alphabetWar("zzzzs"), "Right side wins!" );
// console.log( alphabetWar("wwwwww"), "Left side wins!" );