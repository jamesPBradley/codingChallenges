//p: nums
//r: array of nums or null

function getAges(sum,difference) {
    if(sum < 0 || difference < 0) {
        return null;
    }
    const y = (sum - difference)/2;
    const x = sum - y;
    return x < 0 || y < 0 ? null : [x,y].sort((a,b) => b-a);
}

console.log(getAges(24,4)) // [14,10]);
console.log(getAges(63,-14)) // null);
