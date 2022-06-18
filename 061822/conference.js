

//p: arrays of strings
//r: string

function conferencePicker(visited,offered) {
    // find the first offer element not in the visited array
    for(let i=0; i<offered.length; i++) {
        if(visited.includes(offered[i]) === false) {
            return offered[i];
        }
    }
    // if no new cities in offered array, return string
    if(offered.every(city => visited.includes(city))) {
        return 'No worthwhile conferences this year!';
    }
}



console.log(conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne'])) //'Paris');
console.log(conferencePicker(['Buenos Aires','Mexico City','Johannesburg'],['Melbourne','Moscow'])) //'Melbourne');
console.log(conferencePicker(['Tokyo','Madrid','Melbourne','Sydney','Rio De Janeiro','Saint Petersburg','Brisbane','Paris','Houston'],['Sydney','Chicago','Paris'])) //'Chicago');
console.log(conferencePicker([],['Philadelphia','Osaka','Tokyo','Melbourne'])) //'Philadelphia','Should work if no cities visited');
console.log(conferencePicker(['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne'])) //'No worthwhile conferences this year!','Should work if all offered cities previously visited');
