//p: object, num
//r: string

function canStillWin(table, racesRemaining) {
    // make the object information more easily accessible
    let racers = Object.keys(table).map(element => {
        let obj = {};
        obj.name = element;
        obj.score = table[element];
        return obj
    }).sort((a,b) => b.score-a.score);

    // what is the deficit between first and other positions?
    // any deficit <= maxPoints obtainable can be a champion
    let champsInTheMaking = racers
                                  .filter(element => racers[0].score - element.score <= racesRemaining * 25)
                                  .sort((a,b) => a.name < b.name ? -1 : 1)
                                  .map(element => element.name);

    // if there is only one champ, it's the leader. return the corresponding string
    if(champsInTheMaking.length === 1) {
        return `${champsInTheMaking[0]} has already won the championship!`
    }

    // if there is more than one champ, return the corresponding string
    let champString = '';
    while(champsInTheMaking.length > 0) {
        champsInTheMaking.length > 2 ?
        champString += `${champsInTheMaking.shift()}, ` :
        champsInTheMaking.length > 1 ?
        champString += `${champsInTheMaking.shift()} ` :
        champString += `and ${champsInTheMaking.shift()} can still win the championship.`; 
    }
    return champString;
}

// function canStillWin(table, racesRemaining) {
//     const maxScore = Math.max(...Object.values(table));
//     let possibleWinners = [];
    
//     for (let driver in table)
//       if (maxScore - table[driver] <= 25 * racesRemaining)
//         possibleWinners.push(driver);
    
//     if (possibleWinners.length === 1)
//       return `${possibleWinners[0]} has already won the championship!`;
    
//     possibleWinners.sort();
//     return `${possibleWinners.slice(0, -1).join(", ")} and ${possibleWinners[possibleWinners.length - 1]} can still win the championship.`;
// }


console.log(canStillWin({"Hamilton": 300, "Vettel": 275, "Bottas": 310, "Raikkonen": 260, "Verstappen": 175, "Ocon": 300}, 4)) 
// "Bottas, Hamilton, Ocon, Raikkonen and Vettel can still win the championship.");

console.log(canStillWin({"Hamilton": 375, "Vettel": 375, "Bottas": 426, "Raikkonen": 212, "Verstappen": 191}, 2)) 
// "Bottas has already won the championship!");

console.log(canStillWin({"Hamilton": 125, "Vettel": 174, "Bottas": 95, "Raikkonen": 190}, 7)) 
// "Bottas, Hamilton, Raikkonen and Vettel can still win the championship.");

console.log(canStillWin({"Hamilton": 300, "Vettel": 275}, 1)) 
// "Hamilton and Vettel can still win the championship.");
