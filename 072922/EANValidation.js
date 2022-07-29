//p: string
//r: boolean

function validateEAN(str) {
    // split string to array so i can use array methods
    // separate first 12 digits from last digit
    let digits = str.split('').slice(0,-1);
    const lastDigit = +str[str.length-1];

    // sum product of digits at even indexes and product of digits at odd indexes
    const sum = digits
                      .map((digit,index) => index%2===0 ? +digit : +digit * 3)
                      .reduce((a,c) => a+c,0);

    // if the final sum is divisable by 10, the checksum is 0, otherwise calculate checksum
    const checksum = sum%10 === 0 ? 0 : 10-(sum%10);

    // if result === last digit of string, return true : false
    return lastDigit === checksum;
}

console.log(validateEAN("4003301018398")); // true
console.log(validateEAN("9783815820865")); // true, "Check EAN-Code \"9783815820865\"");
console.log(validateEAN("9783815820864")); // false, "Check EAN-Code \"9783815820864\"");
console.log(validateEAN("9783827317100")); // true, "Check EAN-Code \"9783827317100\"");