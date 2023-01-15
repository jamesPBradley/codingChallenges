// p: number, number
// r: number

// function overTheRoad(address,last) {
//     // create array ascending to last
//     let houses = [];
//     for(let i=1; i<=last*2; i++) {
//         houses.push(i);
//     }
//     // return houses;
//     // build new strings of only odds and evens (evens in reverse order)
//     let evens = houses.filter(e=>e%2==0).reverse();
//     // return evens;
//     let odds = houses.filter(e=>e%2>0);
//     // return index of array
//     return address%2>0 ? evens[odds.indexOf(address)] : odds[evens.indexOf(address)];
// }

function overTheRoad(address, n) {
    return n*2-address+1;
}

console.log(overTheRoad(3,3), 4);
console.log(overTheRoad(2,3), 5);
console.log(overTheRoad(3,5), 8);
console.log(overTheRoad(7,11), 16);
console.log(overTheRoad(23633656673,310027696726), 596421736780);