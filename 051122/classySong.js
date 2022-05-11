class Song {
    constructor(title, artist, listeners=[]) {
        this.title = title;
        this.artist = artist;
        this.listeners = listeners;
    }

    howMany(array) {
        let startLength = this.listeners.length;
        for(let element in array) {
            if(this.listeners.includes(array[element].toLowerCase())) {
                continue;
            }else {
                this.listeners.push(array[element].toLowerCase());
            }
        }
        return this.listeners.length - startLength;
    }
}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']));
// 5

console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));
// 2

console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']));
// 2

console.log(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']));
// 1

console.log(mountMoose.howMany(['Jack', 'jacK']));
// 1
