// p: class
// string

class Dinglemouse {
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName() {
        return this.firstName && this.lastName ? `${this.firstName} ${this.lastName}` :
               this.firstName ? `${this.firstName}` :
               this.lastName ? `${this.lastName}` : ''
    }
}

console.log(new Dinglemouse('James','Bradley').getFullName());
console.log(new Dinglemouse('Clint').getFullName());