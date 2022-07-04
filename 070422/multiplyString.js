//p: string, num, num
//r: string

function modifyMultiply(str,loc,num) {
    let arr = str.split(' ');
    let result = []
    for(let i=0; i<num; i++) {
        result.push(arr[loc]);
    }
    return result.join('-');
}


console.log(modifyMultiply("This is a string",3 ,5)); 
// "string-string-string-string-string", "The string is incorrect");

console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10)); 
// "that-that-that-that-that-that-that-that-that-that");

console.log(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",1 ,1)); 
// "means");

console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8)); 
// "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");

console.log(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5)); 
// "around-around-around-around-around");
