// p: array
// r: string

function paul(arr) {
    // create an object with key value pairs
    const scores = {
        'kata': 5,
        'Petes kata': 10,
        'life': 0,
        'eating': 1
    }
    // iterate through array adding values from object
    const misery = arr.reduce((a,c)=>a + scores[c],0);
    // return string based on conditional
    return misery < 40 ? 'Super happy!' :
           misery < 70 ? 'Happy!' :
           misery < 100 ? 'Sad!' : 'Miserable!';
}


console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');