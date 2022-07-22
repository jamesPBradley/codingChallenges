//p: string, boolean
//r: boolean

function negationValue(str, val) {
    return str.length%2 === 0 ? Boolean(val) : !Boolean(val);
}

console.log(negationValue("!", false)) // true, "Wrong!");
console.log(negationValue("!", true)) // false, "Wrong!");
console.log(negationValue("!!!", [])) // false, "Wrong!");
