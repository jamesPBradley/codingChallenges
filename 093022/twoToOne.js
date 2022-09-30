// p: string
// r: string

function longest(a,b) {
    // combine strings,remove duplicates, and sort 
    return [...new Set((a+b).split(''))].sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
