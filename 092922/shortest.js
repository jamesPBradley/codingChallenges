//p: string
//r: num

function findShort(str) {
    return str
               // convert string to an array
               .split(' ')
               // sort elements by their length and return the smallest length
               .sort((a,b)=>a.length-b.length)[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
console.log(findShort("Let's travel abroad shall we"), 2);