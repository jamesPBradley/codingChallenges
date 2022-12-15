// p: number, number
// r: number

function finalGrade(exam, projects) {
    return exam > 90 || projects > 10 ? 100 :
           exam > 75 && projects >= 5 ? 90 :
           exam > 50 && projects >= 2 ? 75 : 0;
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);