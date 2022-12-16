// p: string
// r: string

function correct(str) {
    let result = '';
    for(let i=0; i<str.length; i++) {
        result += str[i]=='5' ? 'S' :
                  str[i]=='1' ? 'I' :
                  str[i]=='0' ? 'O' : str[i];
    }
    return result;
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");