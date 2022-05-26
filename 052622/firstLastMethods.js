//p: array
//r: first or last element


Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length-1];
}

console.log([2,5,7,3,4].first()) // 2
console.log([2,5,7,3,4].last()) // 4
console.log([].first()) // undefined
console.log([].last()) // undefined

