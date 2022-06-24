function Fighter(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.toString = function() { return this.name; }
}

//p: 2 object declarations
//r: string

function declareWinner(fighter1, fighter2, firstAttacker) {
    // determine first and second attackers
    let first;
    let second;

    if(fighter1.name === firstAttacker) {
        first = fighter1;
        second = fighter2;
    }else {
        first = fighter2;
        second = fighter1;
    }

    // repeat actions until a fighter's health <= 0
    while(first.health > 0 && second.health > 0) {
        // first attacks second
        second.health -= first.damage;
        // check health
        if(second.health <= 0) {
            return first.name;
        }

        // second attacks first
        first.health -= second.damage;
        // check health
        if(first.health <= 0) {
            return second.name;
        }
    }
}

    
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew");
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) // "Harry");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")) // "Harald")
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")) // "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")) // "Harald")
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")) // "Harald")
