//p: string
//r: string

function vertMirror(s) {
    // split string into array and reverse each set of letters
    return s
            .split('\n')
            .map(element => element.split('').reverse().join(''))
            .join('\n');
}

function horMirror(s) {
    // split string into array and reverse array order
    return s
            .split('\n')
            .reverse()
            .join('\n');
}

function oper(fct,s) {
    // pass string into one of the functions
    return fct(s);
}



console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")); // "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")); // "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")); // "yeCt\nCSbg\nJVhv\nlVHt");
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")); // "cEYz\nLPKo\ndbrZ\nnjMK");