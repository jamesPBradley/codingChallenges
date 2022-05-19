//P: array of different data types
//R: binary string

function arr2Bin(arr) {
    const sum1 = arr.filter(element => typeof element === 'number')
                    .reduce((accum, current) => accum + current, 0);
  
    let sum2 = Math.abs(sum1);

    if(sum1 === null) {
        return "0";
    }else if(sum1 != sum1) {
        return 'NaN';
    }

    let multiple = 1;
    let binArr = [];
    let result = [];
    while(multiple <= sum2) {
        binArr.push(multiple);
        multiple *=2;
        result.push(0);
    }

    for(let i=binArr.length-1; i>=0; i--) {
        if(binArr[i]<=sum2) {
            sum2 -= binArr[i];
            result[i]++;
        } else {
            continue;
        }
    }
    return sum1 >= 0 ? result.reverse().join('').toString() || '0' :
                   `-${result.reverse().join('').toString()}`;
}

console.log(arr2Bin([1,2])); // '11'
console.log(arr2Bin([1,2,3,4,5])); // '1111'
console.log(arr2Bin([1,10,100,1000])); // '10001010111'
console.log(arr2Bin([null])); // '0'
console.log(arr2Bin([true,true,false,15])); // '1111'