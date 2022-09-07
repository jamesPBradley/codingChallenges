//p: string
//r: string

function removeUrlAnchor(str) {
    // find index of #
    const end = str.indexOf('#');
    // return slice with ending index of # if it's greater than -1, otherwise return str
    return end > -1 ? str.slice(0,end) : str;
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')