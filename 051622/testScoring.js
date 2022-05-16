// A new school year is approaching, which also means students will be taking tests.
// P: array of numbers, number for each correct answer, number for each omitted answer, number deducted for each wrong answer
// R: overall test score as num


function scoring (answers, correct, omit, wrong) {
    const correctA = answers.filter(element => element === 0);
    const omitA = answers.filter(element => element === 1);
    const incorrectA = answers.filter(element => element === 2);

    return (correctA.length*correct + omitA.length*omit - incorrectA.length*wrong)
}


console.log(scoring([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)) // 9
console.log(scoring([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)) // 3


