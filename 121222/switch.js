// p: number
// r: string

function switchItUp(n) {
    return n==0 ? 'Zero' :
           n==1 ? 'One' :
           n==2 ? 'Two' :
           n==3 ? 'Three' :
           n==4 ? 'Four' :
           n==5 ? 'Five' :
           n==6 ? 'Six' :
           n==7 ? 'Seven' :
           n==8 ? 'Eight' : 'Nine'
}

console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");