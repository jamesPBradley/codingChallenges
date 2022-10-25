// p: string
// r: string

function covfefe(str) {
    // make string an array
    let arr = str.split(' ');
    // create a new variable, adding an instance of coverage to the variable for every instance of covfefe in addition to other words and spacing
    let result = arr.map(e=>e.includes('coverage') ? e.replace('coverage','covfefe') : e);
    // if coverage does not exist in the input string, add covfefe to resulting array
    if(str.includes('coverage')===false) {
        result.push('covfefe');
    }
    // return a string
    return result.join(' ');
}

console.log(covfefe("coverage"),"covfefe");
console.log(covfefe("coverage coverage"),"covfefe covfefe");
console.log(covfefe("nothing"),"nothing covfefe");
console.log(covfefe("double space "),"double space  covfefe");
console.log(covfefe("covfefe"),"covfefe covfefe");