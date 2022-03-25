

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



function fakeBin(x){
  let numberArray = x.split('').map(element => +element);
  for(i=0; i<numberArray.length; i++) {
    if(numberArray[i]<5) {
      numberArray.splice(i,1,'0');
    }else {
      numberArray.splice(i,1,'1');
    }
  }return numberArray.join('');
}