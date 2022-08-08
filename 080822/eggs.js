//p: num
//r: num

function cookingTime(eggs) {
    // get remainder of eggs/8 and round it up, then multiply by 5
    return Math.ceil(eggs/8) * 5;
}


console.log(cookingTime(0)); // 0, '0 eggs');
console.log(cookingTime(5)); // 5, '5 eggs');
console.log(cookingTime(10)); // 10, '10 eggs');
