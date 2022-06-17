//p: array
//r: array

function transpose(notes, step) {
    const sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    // find index of note in sharp/flat arrays
    let indexes = notes.map(note => sharps.indexOf(note) >= 0 ? sharps.indexOf(note) : flats.indexOf(note));
    // increment index
    for(let i=0; i<indexes.length; i++) {
        indexes[i] = indexes[i] + step;
        if(indexes[i] >= sharps.length) {
            indexes[i] = indexes[i] - sharps.length;
        }else if(indexes[i] < 0) {
            indexes[i] = sharps.length + indexes[i];
        }
    }
    // build new array with finalized indexes
    return indexes.map(index => sharps[index]);
}

console.log(transpose(['E'], 5)); //['A']))
console.log(transpose(['G'], 5)); //['C']))
console.log(transpose(['Db'], -4)); //['A']))
console.log(transpose(['E', 'F'], 1)); //['F', 'F#']))
