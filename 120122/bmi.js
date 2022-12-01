// p: number, number
// r: string

function bmi(w,h) {
    // calculate bmi
    const result = w/h**2;
    // return string based on conditional
    return result <= 18.5 ? 'Underweight' : 
           result <= 25 ? 'Normal' :
           result <= 30 ? 'Overweight' : 'Obese';
}

console.log(bmi(80, 1.80), "Normal");
