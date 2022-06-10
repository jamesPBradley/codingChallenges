



Math.abs = function (x) {
    return x < 0 ? x*-1 : x;
}
  
Math.pow = function (x,y) {
    if(y===0) {
      return 1;
    }
    return x*(Math.pow(x,y-1));
}

Math.ceil = function(x) {
    let input = x;
    if(x%1===0) {
        return x;
    }
    let string = input.toString();
    let dotIndex = string.split('').indexOf('.');
    return +string.substring(0,dotIndex)+1;
}

Math.floor = function(x) {
    let string = x;
    if(x%1===0) {
        return x;
    }else if(x%1>0) {
        string = x.toString();
    }
    let array = string.split('');
    let dotIndex = array.indexOf('.');
                            
    let result = array.join('');
    return +result.substring(0,dotIndex)
}

Math.round = function(x) {
    let input = x;
    if(x%1===0) {
        return x;
    }
    let string = input.toString();
    let array = string.split('');
    let dotIndex = array.indexOf('.');
    let left = +string.substring(0,dotIndex);

    return +array[dotIndex+1] < 5 ? left : left+1;
}

Math.max = function(...args) {
    return args.sort((a,b) => b-a)[0];
}

Math.min = function(...args) {
    return args.sort((a,b) => a-b)[0];
}
console.log(Math.min(2,45,1,3,8));