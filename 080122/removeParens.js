//p: string
//r: string


function removeParentheses(s){
    let r = 0
    let x = ''
    for (let c of s) {
      if (c=='(') r++
      if (r==0) x+=c
      if (c==')') r--
    }
    return x
}


console.log(removeParentheses("example(unwanted thing)example")); // "exampleexample"
console.log(removeParentheses("example (unwanted thing) example")); // "example  example"
console.log(removeParentheses("a (bc d)e")); // "a e"
console.log(removeParentheses("a(b(c))")); // "a"
console.log(removeParentheses("hello example (words(more words) here) something")); // "hello example  something"
console.log(removeParentheses("(first group) (second group) (third group)")); // "  "