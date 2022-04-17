
// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}



function count(array){
  return array.reduce(function(object, key) {
    if(key in object) {
      object[key]++;
    }else {
      object[key] = 1;
    }return object;
  },{})
}