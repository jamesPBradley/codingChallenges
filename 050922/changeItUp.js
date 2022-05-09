// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)



function changer(str) { 
  const alphabet = ['a','b','c','d','e','f','g',
                    'h','i','j','k','l','m','n','o','p',
                    'q','r','s','t','u','v','w','x','y','z'];
  
  const vowels =['a','e','i','o','u'];
    
  let array = str.toLowerCase().split('');
  
  for(let i=0; i<array.length; i++) {
    if(alphabet.includes(array[i])) {
      let index = alphabet.indexOf(array[i])
      array[i] === 'z' ? 
      array[i] = alphabet[0] : 
      array[i] = alphabet[index + 1]
    }
  }
  
  for(let i=0; i<array.length; i++) {
    if(vowels.includes(array[i])) {
      array[i] = array[i].toUpperCase();
    }
  }
  
  return array.join('');
}