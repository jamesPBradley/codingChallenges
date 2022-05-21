//P: array of nums
//R: array of objects

function numObj(s) {
    let result = [];
    let keyArr = [];
    let valueArr = [];

    for(let item in s) {
        keyArr.push(s[item]);
        let value = String.fromCharCode(s[item]);
        valueArr.push(value);
    }

    for(let i=0; i<keyArr.length; i++) {
        let obj = {};
        obj[keyArr[i]]=valueArr[i];
        result.push(obj);
    }

    return result;
}

console.log(numObj([118,117,120])); //[{'118':'v'}, {'117':'u'}, {'120':'x'}]
console.log(numObj([101,121,110,113,113,103])); //[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]
