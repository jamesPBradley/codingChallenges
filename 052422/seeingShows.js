

//p: array of objects
//r: array including array of shows and total $ spent

function chooseShows(showList) {
    // don't modify input
    let shows = [...showList];
    
    // sort array by show time/price
    shows.sort((a,b) => {
      if(a.time === b.time && a.price === b.price){
        return 0;
      }else if(a.time === b.time) {
        return a.price - b.price;
      }else {
        return a.time - b.time;
      }
    })
    
    // delete from array shows that cannot be seen in succession
    for(let i=0; i<shows.length-1; i++) {
      if(shows[i+1].time - shows[i].time - shows[i].length < 0.5) {
        shows.splice(i+1,1);
        i--
      }
    }
    
  //   place show names in an array
    let schedule = shows.map(element => element.name);
  //   sum price of each show on schedule
    let cost = shows.reduce((accum, current) => accum + current.price,0)
    
  // validate input is not an empty array
    return showList.length === 0 ? [["No shows to see!"], 0] : [schedule,cost];
}