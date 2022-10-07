//p: string
//r: string

function getStrings(city) {
    // handle input
    let str = city.toLowerCase().split(' ').join('');
    // create empty return variable
    let result = [];
    // create variable to check for inclusion
    let check = [];
    // loop through handled input
    for(let i=0; i<str.length; i++) {
        // if char does not exist in check var, add element to result and check vars
        if(check.includes(str[i])===false) {
            result.push(`${str[i]}:*`);
            check.push(str[i]);
        // if char eixsts in check var, edit element in result var
        }else if(check.includes(str[i])) {
            result[check.indexOf(str[i])] += '*';
        }
    }
    // seprate elements with a comma, change to string, and return
    return result.join(',');
}

console.log(getStrings("Louisville"), 'l:***,o:*,u:*,i:**,s:*,v:*,e:*');
console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");