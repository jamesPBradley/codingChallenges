//p: string string
//r: boolean

// function isAnagram(str1,str2) {
//     // make inputs arrays
//     const arr1 = str1.toLowerCase('').split('');
//     const arr2 = str2.toLowerCase('').split('');
//     // return arr1.every(l=>arr2.includes(l))
//     // if the string lengths don't match, return false
//     // if they match, every letter in str1 needs to be included in str2, then return true
//     return (arr1.length === arr2.length) && (arr1.every(l=>arr2.includes(l))) && (arr2.every(l=>arr1.includes(l))) ? true : false
// }

function isAnagram(str1,str2) {
    // sort every letter in the string
    const t = str1.toLowerCase().split('').sort().join('');
    const o = str2.toLowerCase().split('').sort().join('');
    // if they strings match, return true. otherwise, return false
    return (t==o)?true:false;
  }

console.log(isAnagram("all", "lll"))

console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')
console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count')
