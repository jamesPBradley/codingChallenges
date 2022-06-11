Array.prototype.sort = function() {
    let input = this;
    let sorted = [];

    while(input.length>0) {
        let min = Math.min(...input);
        let minIndex = input.indexOf(min);
        sorted.push(min);
        input.splice(minIndex,1);
    }
    return sorted;
}



console.log([9,7,2,4,5,3,6,8,1].sort()) //,[1,2,3,4,5,6,7,8,9]);
