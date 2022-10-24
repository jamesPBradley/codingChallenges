// p: string
// r: string

function spoonerize(str) {
    // make an array from string
    let arr = str.split(' ').map(e=>e.split(''));
    // place first index of each element in separate variables
    const first = arr[0].shift();
    const last = arr[1].shift();
    // replace first index of each element with variables
    arr[0].unshift(last);
    arr[1].unshift(first);
    // create string and return
    return arr.map(e=>e.join('')).join(' ');
}

console.log(spoonerize("nit picking"), "pit nicking");
console.log(spoonerize("wedding bells"), "bedding wells");
console.log(spoonerize("jelly beans"), "belly jeans");