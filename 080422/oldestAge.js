

//p: array
//r: array

function twoOldestAges(arr) {
    // make oldest ages easily accessible via sort
    const oldest = [...arr.sort((a,b) => b-a)];
    // return them in an array
    return [oldest[1],oldest[0]];
}


let results1 = [1,5,87,45,8,8];
let results2 = [6,5,83,5,3,18];
  
console.log(twoOldestAges(results1)); // 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
console.log(twoOldestAges(results2)); // 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
