

//p: array of objects
//r: string

var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
  
var list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

// function getFirstPythonDev(list) {
//     const langs = list.map(dev => dev.language);
//     const devIndex = langs.indexOf('Python');

//     return devIndex === -1 ? 'There will be no Python developers' : 
//                              `${list[devIndex].firstName}, ${list[devIndex].country}`;
// }

function getFirstPythonDev(list) {
    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
}

  
console.log(getFirstPythonDev(list1)); // 'Victoria, Puerto Rico'
console.log(getFirstPythonDev(list2)); // 'There will be no Python developers'
  
