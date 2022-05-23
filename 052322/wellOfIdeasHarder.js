
//P: array of arrays. possible differing lengths. elements may not be strings.
//R: string

function well(x) {
    //make a one dimensional array
    let array = [...x];
    array = array.join(',').split(',');


    // add up goods and bads
    const good = array.filter(element => element.toLowerCase() === 'good').length;

    // return string
    return good === 0 ? 'Fail!' :
           good <= 2 ? 'Publish!' : 'I smell a series!';

    // return good;
}

console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])) // 'Fail!'
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])) // 'Publish!'
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])) // 'I smell a series!'