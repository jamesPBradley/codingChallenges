// p: num, array of nums (floats?)
// r: num

function howManyGifts(maxBudget, gifts) {
    // sort gifts array
    const prices = [...gifts].sort((a,b) => a-b);

    // add gift prices together until they exceed maxBudget
    let i = 0;
    let totalSpent = 0;
    while(totalSpent <= maxBudget) {
        totalSpent += prices[i];
        i++;
    }
    // return number of gifts added together
    return i-1;
}


console.log(howManyGifts(20, [13, 2, 4, 6, 1])); // 4
console.log(howManyGifts(0, [1])); // 0
