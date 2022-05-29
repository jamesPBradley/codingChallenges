//p: array of objects
//r: number rounded to nearest integer

const list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
    
    
const list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];
    
  

// function getAverageAge(list) {
//     const ages = list.map(element => element.age);
//     return +(ages.reduce((accum, current) => accum + current,0)/ages.length).toFixed(0);
// }

// function getAverageAge(list) {
//     return +(list
//                  .map(element => element.age)
//                  .reduce((accum, current) => accum + current,0)/list.length)
//                  .toFixed(0);
// }

function getAverageAge(list) {
    return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}

console.log(getAverageAge(list1)) // 50
console.log(getAverageAge(list2)) // 21


