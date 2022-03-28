
// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  let array = str.split(' ');
  let word = array.shift()
  array.push(word);
  return array.join(' ');
}