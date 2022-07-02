


//p: two numbers
//r: object

function getHonorPath(honorScore, targetHonorScore) {
    if(honorScore > targetHonorScore) {
        return {};
    }
    let pointsNeeded = targetHonorScore-honorScore;
    let kyu2 = 0;

    while(pointsNeeded%2 > 0) {
        kyu2++;
        pointsNeeded--
    }

    return {'1kyus': pointsNeeded/2, '2kyus': kyu2};
}



console.log(getHonorPath(2, 11)); //['2kyus'], 1, 'Needs to solve 1 2kyus');
console.log(getHonorPath(2, 11)); //['1kyus'], 4, 'Needs to solve 4 1kyus');
console.log(getHonorPath(11, 2)); //['2kyus'], undefined, 'Let warrior go for drinks!');
console.log(getHonorPath(11, 2)); //['1kyus'], undefined, 'Let warrior go for drinks!');
