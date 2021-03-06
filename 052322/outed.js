
//p: object {'name': num}, string
//r: string


function outed(meet,boss) {
    const names = Object.keys(meet);
    let team = Object.assign(meet);
    team[boss] = team[boss]*2;

    const scores = names.map(element => team[element]);
    const avgMood = scores.reduce((accum, current) => accum + current,0)/scores.length;
  
    return avgMood <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')) // 'Get Out Now!'
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie')) // 'Nice Work Champ!'
console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john')) // 'Get Out Now!'