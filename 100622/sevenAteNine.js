// p: string
// r: string

function sevenAte9(str) {
    let result = '';
    // loop through string
    for(let i=0; i<str.length; i++) {
        // check each char for 7
        // if next char is 9 and next char is 7, exclude prior char
        if(str[i]==='9' && str[i-1]==='7' && str[i+1]==='7') {
            result += '';
        }else {
            result += str[i];
        }
    }
    // return resulting string
    return result;
}


      console.log(sevenAte9('797'), '77')
      console.log(sevenAte9('7979797'), '7777')
      console.log(sevenAte9('165561786121789797'), '16556178612178977')
