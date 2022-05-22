//P: string
//R: array of nums

function scoreboard(string) {
    //make an object holding possible strings
    const ref = {
        'zero': 0,
        'nil': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }

    //if string component in object, place corresponding value in array
    const words = string.split(' ');
    let score = [];
    for(let i=0; i<words.length; i++) {
        if(words[i] in ref) {
            score.push(ref[words[i]]);
        }
    }

    //return array
    return score;
}

console.log(scoreboard("The score is four nil")) // [4,0]
console.log(scoreboard("new score: two three")) // [2,3]
console.log(scoreboard("two two")) // [2,2]
console.log(scoreboard("Arsenal just conceded another goal, two nil")) // [2,0]