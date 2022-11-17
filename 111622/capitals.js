// p: array
// r: array

function capital(arr) {
    // create new array
    let result = [];
    // loop through input
    for(let i=0; i<arr.length; i++) {
        // store object keys in an array for easy access
        const keys = Object.keys(arr[i]);
        // push string to array that includes capital of place
        result.push(`The capital of ${arr[i][keys[0]]} is ${arr[i].capital}`);
    }
    // return the array
    return result;
}

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(state_capitals)[0], "The capital of Maine is Augusta");

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
console.log(capital(country_capitals)[0], "The capital of Spain is Madrid")

mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
console.log(capital(mixed_capitals)[1], "The capital of Spain is Madrid")