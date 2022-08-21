//p: string
//r: string

function triangle(str) {
    // variable holding unique colors to reference
    let colors = ['R','G','B'];
    // make an array from the parameter
    let row = str.split('');

    // continue to generate rows until there is a single color in the row
    while(row.length>1) {
        // placeholder array
        let rowN = [];
        // loop over entire array
        for(let i=1; i<row.length; i++) {
            const first = row[i-1];
            const second = row[i];
            // new colors generated based on conditional
            first === second ? rowN.push(first) : rowN.push(colors.filter(c=>[first,second].indexOf(c) === -1)[0]);
        }
        // update row to prevent endless loop
        row = rowN;
    }
    return row[0];
}


console.log(triangle('GB'), 'R');
console.log(triangle('RRR'), 'R');
console.log(triangle('RGBG'), 'B');
console.log(triangle('RBRGBRB'), 'G');
console.log(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
console.log(triangle('B'), 'B');
