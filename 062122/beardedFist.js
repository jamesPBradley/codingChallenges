//p: array
//r: string

function fistBeard(arr) {
    return arr
              .join(',')
              .split(',')
              .map(element => String.fromCharCode(element))
              .join('');
}


console.log(fistBeard([[66, 101], [97, 114, 100], [101, 100, 45, 70, 105, 115, 116]])) // 'Bearded-Fist');
console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]])) // 'Nunchuks');
console.log(fistBeard([[70, 97, 99], [101, 45, 75, 105, 99, 107]])) // 'Face-Kick');
console.log(fistBeard([[80], [117, 115, 104], [45, 85, 112, 115]])) // 'Push-Ups');
console.log(fistBeard([[82, 111, 117, 110, 100, 104, 111, 117], [115, 101], [45, 75, 105, 99, 107]])) // 'Roundhouse-Kick');
console.log(fistBeard([[83], [109, 97], [115, 104]])) // 'Smash');
