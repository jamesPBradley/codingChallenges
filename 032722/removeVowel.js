// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
  let array = string.split('');
  for(i=0; i<array.length; i++) {
    if((array[i] == 'a') ||
       (array[i] == 'e') ||
       (array[i] == 'i') ||
       (array[i] == 'o') ||
       (array[i] == 'u')) {
       array.splice(i,1);
       i--
    }
  } return array.join('');
}