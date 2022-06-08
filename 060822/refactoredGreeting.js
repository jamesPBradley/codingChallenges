class Person {
    constructor(name) {
        this.name = name;
    }
    greet(person) {
        return `Hello ${person}, my name is ${this.name}`
    }
}

var joe = new Person('Joe');
console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
console.log(joe.name);          // should == 'Joe'