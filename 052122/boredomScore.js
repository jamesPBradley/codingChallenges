
//P: object
//R: string

function boredom(staff) {
    const values = {
        "accounts": 1,
        "finance": 2,
        "canteen": 10,
        "regulation": 3,
        "trading": 6,
        "change": 6,
        "IS": 8,
        "retail": 5,
        "cleaning": 4,
        "pissing about": 25
    }

    let positions = [];
    for(let key in staff) {
        if(staff[key] in values) {
            positions.push(staff[key])
        }
    }

    let scores = [];
    for(let i=0; i<positions.length; i++) {
        scores.push(values[positions[i]]);
    }

    const result = scores.reduce((accum, current) => accum + current, 0);

    return result <= 80 ? 'kill me now' : 
           result < 100 ? 'i can handle this' : 'party time!!'; 
}

console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' })); //'kill me now'

console.log(boredom({ tim: 'IS', jim: 'finance',
randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
alex: 'regulation', john: 'accounts', mr: 'canteen' })); //'i can handle this'

console.log(boredom({ tim: 'accounts', jim: 'accounts',
randy: 'pissing about', sandy: 'finance', andy: 'change',
katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
john: 'retail', mr: 'pissing about' })); //'party time!!'

