

class DataSet {
    constructor(...data) {
      this.data = data;
      this.setMean();
      this.setVar();
    }
    setMean() {
      return this.mean = this.data.reduce((a,b) => a+b) / this.data.length
    }
    setVar() {
      this.variance = this.data.map(x => (x-this.mean)**2).reduce((a,b)=>a+b) / this.data.length;
      this.stdDeviation = Math.sqrt(this.variance);
      return this.variance;
    }
}


let myData1 = new DataSet(1,2,3,4,5,6,7);

console.log(myData1.data) // [1,2,3,4,5,6,7])
console.log(myData1.mean) // 4)
console.log(myData1.variance) // 4)
console.log(myData1.stdDeviation) // 2)

myData1.data[6] = 14;
console.log(myData1.setMean()) // 5)
console.log(myData1.mean) // 5)
console.log(myData1.setVar()) // 16)
console.log(myData1.variance) // 16)
console.log(myData1.stdDeviation) // 4)
