

//p: none
//r: class

class Counter {
    constructor() {
      this.counter = 0;
    }
    
    incr() {
      this.counter++;
    }
    
    valueOf() {
      return this.counter;
    }
}

let c = new Counter();
c.incr(); // counter is now at 1
console.log(c + 1); // 2
console.log(c > 1); // false
c > 0; // true
c == 1; // true
Math.sqrt(c); // 1