//p: string
//r: num

function sumOfABeach(beach) {
    const beachWords = ["sand", "water", "fish", "sun"];
    let input = beach.toLowerCase();
    let match = 0;

    for(let i=0; i<beachWords.length; i++) {
        while(input.includes(beachWords[i])) {
            input = input.replace(beachWords[i], '');
            match++;
        }

    }
    return match;
}


console.log(sumOfABeach("SanD")); // 1);
console.log(sumOfABeach("sunshine")); // 1);
console.log(sumOfABeach("sunsunsunsun")); // 4);
console.log(sumOfABeach("123FISH321")); // 1);


console.log(sumOfABeach("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn")); // 4);
console.log(sumOfABeach("sAnDsandwaTerwatErfishFishsunsunsandwater")); // 10);
console.log(sumOfABeach("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ")); // 0);
console.log(sumOfABeach("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f")); // 10);
console.log(sumOfABeach(
      "saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater")); 
      //100


console.log(sumOfABeach("sununsu")); // 1);
console.log(sumOfABeach("sandandndsansa")); // 1);
console.log(sumOfABeach("wateratertererwatewatwa")); // 1);
console.log(sumOfABeach("fishishshfisfi")); // 1);
