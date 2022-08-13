
//p: integer, integer, integer
//r: integer

function growingPlant(uSpeed,dSpeed,height) {
    let current = 0;
    let days = 0;
    // while plant height is less than desired height, run this loop
    while(current < height) {
        // add uSpeed to current height
        current += uSpeed;
        // increase days variable
        days++;
        // check if current height is at least as big as desired height
        if(current >= height) {
            // if it is, return days variable
            return days;
        }
        // if it isn't, subtract dSpeed from current height
        current -= dSpeed;
    }
}

console.log(growingPlant(100,10,910)); //10)
console.log(growingPlant(10,9,4)); //1)
