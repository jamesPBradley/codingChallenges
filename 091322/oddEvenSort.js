//p: string
//r: string

function sortMyString(str) {
    // make string an array
    const arr = str.split('');
    // map new arrays based on index
    let evens = arr.map((e,i)=>{
        if(i%2===0) {
            return e;
        }
    }).join('');

    let odds = arr.map((e,i)=>{
        if(i%2>0) {
            return e;
        }
    }).join('')
    
    return `${evens} ${odds}`
    // combine arrays into string and return
}

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");  