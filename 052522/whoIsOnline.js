
//p: array of objects
//r: object

function whosOnline(friends) {
    let result = {};
    let onArr = [];
    let offArr = [];
    let awayArr = [];

    friends.forEach(element => {
        if (element.status === 'offline') {
            offArr.push(element.username);
        }else if(element.status === 'online' && element.lastActivity > 10) {
            awayArr.push(element.username);
        }else {
            onArr.push(element.username);
        }
    })
  
    if(onArr.length) {result.online = onArr;}
    if(offArr.length) {result.offline = offArr;}
    if(awayArr.length) {result.away = awayArr;}

    return friends === [] ? {} : result;
}


const friends1 = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }]
  
  const friends2 = [{
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

console.log(whosOnline(friends1)) 
/*online: ['David'],
offline: ['Lucy'],
away: ['Bob']
*/

console.log(whosOnline(friends2))
/*
offline: ['Lucy'],
away: ['Bob']
*/


