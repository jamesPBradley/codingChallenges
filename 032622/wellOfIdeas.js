
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
  let ideaSum = x.reduce(function(allIdeas,idea) {
    if(idea in allIdeas) {
      allIdeas[idea]++;
    }else {
      allIdeas[idea] = 1;
    }return allIdeas;
  },{})
  
  if(!ideaSum.good) {
    return 'Fail!';
  }else if(ideaSum.good > 2) {
    return 'I smell a series!';
  }else if((ideaSum.good === 1) || (ideaSum.good === 2)) {
    return 'Publish!';
  }  
  
}