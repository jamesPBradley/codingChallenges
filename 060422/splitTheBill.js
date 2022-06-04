

//p: object
//r: object


function splitTheBill(x) {
    const group = Object.keys(x);
    let result = Object.assign(x)

    // define the bill
    let bill = 0;
    for(let key in x) {
        bill += x[key];
    }
    // how much should each person have contributed to tab
    const contributions = bill/(group.length);

    // subtract what each person should contribute from what they contributed and round values
    for(let key in result) {
        result[key] -= contributions;
        result[key] = +result[key].toFixed(2);
    }

    return result;
}

console.log(splitTheBill({A: 20, B: 15, C: 10})) // {A: 5, B: 0, C: -5})
console.log(splitTheBill({A: 40, B: 25, X: 10})) // {A: 15, B: 0, X: -15})
