//p: array
//r: string

function likes(array) {
    // if array is empty, return string
    // if array length is less than 2 return string, and so on
    return array.length < 1 ? 'no one likes this' :
           array.length < 2 ? `${array.slice(0)} likes this` :
           array.length < 3 ? `${array.slice(0).join(' and ')} like this` :
           array.length < 4 ? `${array.slice(0,2).join(', ')} and ${array[2]} like this` :
           `${array.slice(0,2).join(', ')} and ${array.length-2} others like this`;
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');