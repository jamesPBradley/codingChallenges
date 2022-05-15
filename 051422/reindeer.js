// P: array of strings
// R: array of strings


// function sortReindeer(reindeerNames) {
//     const nameSwap = reindeerNames.map(element => element.split(' ').reverse().join(' '));

//     const swapSort = nameSwap.sort().map(element => element.split(' ').reverse().join(' '));

//     return swapSort;
// }



function sortReindeer(reindeerNamesArr) {
  const copyArr = [...reindeerNamesArr];
  copyArr.sort(function (a, b) {
    const lastNameA = a.split(' ')[1];
    const lastNameB = b.split(' ')[1];
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;

    return 0;
  });
  return copyArr
}



console.log(sortReindeer([
    "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
    "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
  ]))


