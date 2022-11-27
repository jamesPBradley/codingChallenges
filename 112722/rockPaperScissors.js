// p: string, string
// r: string


function rps(p1,p2) {
    const win1 = 'Player 1 won!';
    const win2 = 'Player 2 won!';
    const draw = 'Draw!'

    // setup each conditional
    return p1==='rock' && p2==='scissors' ? win1 :
           p1==='paper' && p2==='rock' ? win1 :
           p1==='scissors' && p2==='paper' ? win1 :
           p1===p2 ? draw : win2;
}

console.log(rps('rock', 'scissors'), 'rock');
console.log(rps('scissors', 'paper'), 'scissors');
console.log(rps('paper', 'rock'), 'paper');
console.log(rps('scissors', 'rock'), 'rock');
console.log(rps('paper', 'scissors'), 'scissors');
console.log(rps('rock', 'paper'), 'paper');
console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');