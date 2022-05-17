function doubleEveryOther(a) {
    return a.map((element,index) => index%2>0 ? element*2 : element);
}


console.log(doubleEveryOther([1,2,3,4])) // [1,4,3,8]


