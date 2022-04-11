
//  create a function that, given a proper first and last name, will return the correct alias.

//  Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.
 
//  If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
 
//  Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
 
//  var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
//  var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
 
//  aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
//  aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'


function aliasGen(first, last){
//   if((typeof first[0] !== 'string') || (typeof last[0] !== 'string')) {
//     return 'Your name must start with a letter from A - Z.'
//   } 
  if('0123456789'.indexOf(first[0]) != -1 || '0123456789'.indexOf(last[0]) != -1) {
    return 'Your name must start with a letter from A - Z.';
  }
  first = first[0].toUpperCase();
  last = last[0].toUpperCase();
  return `${firstName[first]} ${surname[last]}`;
}


