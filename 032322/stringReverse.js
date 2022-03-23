
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



function solution(str){
  let arr = str.split('');
  arr = arr.reverse();
  let strReverse = arr.join('');
  return strReverse;
}