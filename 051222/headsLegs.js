


// function animals(heads, legs) {
//     let cows = 0;
//     let chickens = 0;

//     let legTest = legs;
//     let headTest = heads;

//     let cowCheck = () => {
//         legTest -=4;
//         headTest--;
//         cows++;
//     }
//     let chickenCheck = () => {
//         legTest -=2;
//         headTest--;
//         chickens++;
//     }
//     while(legTest>=0 && headTest>=0) {
//         chickenCheck();
//         cowCheck();
//         console.log(legTest);
//     }
//     return [chickens,cows];
// }


const animals = (heads, legs) => {
    let cows     = legs / 2 - heads
    let chickens = heads - cows
    return chickens < 0 || cows < 0 || legs % 2 == 1
      ? 'No solutions'
      : [chickens, cows]
  }

console.log(animals(72,200))




// it ("Valid number of animals", function() {
//     Test.assertSimilar(animals(72, 200), [44, 28])
//     Test.assertSimilar(animals(116, 282), [91, 25])
//     Test.assertSimilar(animals(12, 24), [12, 0])
//     Test.assertSimilar(animals(6, 24), [0, 6])
//     Test.assertSimilar(animals(344, 872), [252, 92])
//     Test.assertSimilar(animals(158, 616), [8, 150])
//   })
  
//   it ("Invalid number of animals", function() {
//     Test.assertSimilar(animals(25, 555), "No solutions")
//     Test.assertSimilar(animals(12, 25), "No solutions")
//     Test.assertSimilar(animals(54, 956), "No solutions")
//     Test.assertSimilar(animals(5455, 54956), "No solutions")
//   })
  
//   it ("Edge cases", function() {
//     Test.assertSimilar(animals(0, 0), [0, 0])
//     Test.assertSimilar(animals(-1, -1), "No solutions")
//     Test.assertSimilar(animals(-45, 5), "No solutions")
//     Test.assertSimilar(animals(500, 0), "No solutions")
//     Test.assertSimilar(animals(0, 500), "No solutions")
//     Test.assertSimilar(animals(5, -55), "No solutions")
//   })
// })