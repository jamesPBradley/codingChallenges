//p: string
//r: string

function bucketOf(str) {
    let input = str.toLowerCase();
    const water = ['water', 'wet', 'wash', 'washing', 'watered', 'washed', 'watering'];
    const slime = ['i don\'t know', 'slime'];

    return water.some(element => input.includes(element)) && 
           slime.some(element => input.includes(element)) ? 'sludge' :
           water.some(element => input.includes(element)) ? 'water' :
           slime.some(element => input.includes(element)) ? 'slime' : 'air';
}

console.log(bucketOf("What is that, WATER?!?")); // -> "water"
console.log(bucketOf("I don't know if I'm doing this right.")); // -> "slime"
console.log(bucketOf("You won't get me!")); // -> "air"