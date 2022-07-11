
//p: str
//r: boolean

// function password(str) {
//     const nums = '0123456789';
//     const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
//     let arr = str.split('');
//     let count = 0
//     if(arr.some(element => letters.includes(element) && element === element.toUpperCase())) {
//         count++;
//     }
//     if(arr.some(element => letters.includes(element) && element === element.toLowerCase())) {
//         count++;
//     }
//     if(arr.some(element => nums.includes(element))) {
//         count++;
//     }
//     if(arr.length >= 8) {
//         count++;
//     }
//     return count === 4;
// }

function password(str) {
    const nums = '0123456789';
    const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let arr = str.split('');
    return arr.some(element => letters.includes(element) && element === element.toUpperCase()) === false ? false :
           arr.some(element => letters.includes(element) && element === element.toLowerCase()) === false ? false :      
           arr.some(element => nums.includes(element)) === false ? false :
           arr.length < 8 ? false : true;
}



console.log(password("Abcd1234")) // true);
console.log(password("Abcd123")) // false);
console.log(password("abcd1234")) // false);
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")) // true);
console.log(password("ABCD1234")) // false);
console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,")) // true);
console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,")) // false);
