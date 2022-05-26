//p: string, object
//r: string

function remove(str, what) {
    // dont mutate input
    let s = str;
    let letters = Object.keys(what);
    // loop over string as many times as object says to remove a letter
    for(let i=0; i<letters.length; i++) {
        for(let j=0; j<what[letters[i]]; j++) {
            // remove letter
            s = s.replace(letters[i],''); 
        }
    }
    //return resulting string
    return s;
}

console.log(remove('this is a string',{'t':1, 'i':2})) // 'hs s a string'
console.log(remove('hello world',{'x':5, 'i':2})) // 'hello world'
console.log(remove('apples and bananas',{'a':50, 'n':1})) // 'pples d bnns'
console.log(remove('a',{'a':1, 'n':1})) // ''
console.log(remove('codewars',{'c':5, 'o':1, 'd':1, 'e':1, 'w':1, 'z':1, 'a':1, 'r':1, 's':1})) // ''