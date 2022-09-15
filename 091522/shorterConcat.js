//p: string,string
//r: string


function shorter_reverse_longer(a,b) {
    // determine the longer strong, or a
    // reverse the longer string
    const long = b.length > a.length ? b.split('').reverse().join('') : a.split('').reverse().join('');
    const short = b.length <= a.length ? b : a;
    // return template literal
    return `${short}${long}${short}`;
} 

console.log(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau"), "bauollehbau");
console.log(shorter_reverse_longer("abcde", "fghi"), "fghiedcbafghi");

