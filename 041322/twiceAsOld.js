// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).



function twiceAsOld(dad, son) {
  if(dad > 2*son) {
      return dad-2*son //years since dad was twice age of son
  }else if( dad < 2*son) {
      return 2*son-dad // years until dad is twice age of son
  }else {
      return 0 // dad is age of son
  }
}