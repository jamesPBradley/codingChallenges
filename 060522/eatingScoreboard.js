

//p: array of objects
//r: array of objects


function scoreboard(whoAteWhat) {
    // get scores of each contestant
    let scores = whoAteWhat.map(person => (person.chickenwings*5) + (person.hamburgers*3) + (person.hotdogs*2));
    // get names of each contestant
    let contestants = whoAteWhat.map(person => (person.name));
    // build array of objects
    let result = [];
    for(let i=0; i<contestants.length; i++) {
        let obj = {}
        obj.name = contestants[i];
        obj.score = scores[i];
        result.push(obj);
    }
    // sort array by contestant score or name
    return result.sort((a,b) => {
        if(a.score === b.score) {
            if(a.name < b.name) {
                return -1;
            }else if(b.name < a.name) {
                return 1;
            }else {
                return 0;
            }
        }
        return b.score - a.score;
    });

}

// function scoreboard(whoAteWhat){
//     return whoAteWhat.map(obj => ({
//       name: obj.name,
//       score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
//     })).sort((a, b) => b.score - a.score || a.name > b.name);
//   }

const whoAteWhat = [
      {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
      {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
      {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
      {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
];
    
const result = [
      {name: "Big Bob", score: 134},
      {name: "Billy The Beast", score: 122},
      {name: "Habanero Hillary", score: 98},
      {name: "Joey Jaws", score: 94}
];
    
console.log(scoreboard(whoAteWhat)) //result);
console.log(scoreboard([{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}])) // [{name: "Big Bob", score: 134}]);
console.log(scoreboard([{name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}])) // [{name: "Big Bob", score: 134},{name: "Joey Jaws", score: 94}]);
console.log(scoreboard([{name: "Joey Jaws", chickenwings: 0, hamburgers: 1, hotdogs: 1},{name: "Big Bob" , chickenwings: 1, hamburgers: 0, hotdogs: 0}])) //[{name: "Big Bob", score: 5},{name: "Joey Jaws", score: 5}]);
console.log(scoreboard([])) // []);
