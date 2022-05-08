// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. 
// You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.


function solve(n) {
  let request = n;
  let notes = 0;
  
  if(n % 10 > 0) {
    return -1;
  }
  
  while (request >= 500) {
    request -= 500;
    notes++;
  }
  
    while (request >= 200) {
    request -= 200;
    notes++;
  }
  
    while (request >= 100) {
    request -= 100;
    notes++;
  }
  
    while (request >= 50) {
    request -= 50;
    notes++;
  }
  
    while (request >= 20) {
    request -= 20;
    notes++;
  }
  
    while (request >= 10) {
    request -= 10;
    notes++;
  }
  
  return notes;
}