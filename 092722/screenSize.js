//p: num, string
//r: string

function findScreenHeight(num,str) {
    // determine location of colon
    const colonIndex = str.indexOf(':');
    // calculate ratio using colon location
    const ratio = +str.substring(0,colonIndex)/+str.substring(colonIndex+1);
    // use template literals and return string with calculated height
    return `${num}x${(num/ratio).toFixed(0)}`;
}


console.log(findScreenHeight(1024,"4:3"), "1024x768");
console.log(findScreenHeight(1280,"16:9"), "1280x720");
console.log(findScreenHeight(3840,"32:9"), "3840x1080");
