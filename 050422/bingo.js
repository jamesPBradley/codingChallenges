
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". 
// They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.



function bingo(a) {
  const bingo = [2, 7, 9, 14, 15];
  const letters = a.filter(element => bingo.includes(element));
  let win = 0;  

  for(let i=0; i<bingo.length; i++) {
    if(letters.indexOf(bingo[i]) >= 0) {
      win++;
    }
  }
  
  return win >= 5 ? 'WIN' : 'LOSE';
}