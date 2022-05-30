

//p: array of objects
//r: object

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
  
const answer = { C: 2, JavaScript: 1, Ruby: 1 };

function countLangs(list) {
    return list.reduce((obj,key) => {
        key.language in obj ? obj[key.language]++ : obj[key.language] = 1;
        return obj;
    },{})
}


console.log(countLangs(list1), answer);
  