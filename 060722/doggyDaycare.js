
class Dog {
    constructor(name, age, breed, vaccinated, wormed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.vaccinated = vaccinated;
        this.wormed = wormed;
    }
    // checkDog() {
    //     return this.vaccinated && this.wormed ? `${this.name} can be accepted` :
    //            this.vaccinated === false && this.wormed === false ? `${this.name} can not be accepted` : 
    //            `${this.name} can only be accepted by itself`;
    // }
}

Dog.prototype.checkDog = function() {
        return this.vaccinated && this.wormed ? `${this.name} can be accepted` :
               this.vaccinated === false && this.wormed === false ? `${this.name} can not be accepted` : 
               `${this.name} can only be accepted by itself`;
}


let spot = new Dog("Spot", 5, "Labrador", true, false);
let riley = new Dog("Riley", 3, "GoldenDoodle", true, true);
let clive = new Dog("Clive", 8, "German Shepard", false, false);
  
console.log(spot.checkDog()) // "Spot can only be accepted by itself")
console.log(riley.checkDog()) // // "Riley can be accepted")
console.log(clive.checkDog()) // "Clive can not be accepted")
