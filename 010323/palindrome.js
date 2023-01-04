// p: string
// r: boolean

function isPalindrome(str) {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
    // return str.toLowerCase() == str.toLowerCase().split().reverse().join();
}


console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);