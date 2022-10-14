//p: str
//r: boolean

function XO(str) {
    // account for case
    // make an array
    const arr = str.toLowerCase('').split('');
    // filter for x and filter for o
    const x = arr.filter(e=>e==='x');
    const o = arr.filter(e=>e==='o');
    // return conditional
    return x.length === o.length;
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);