// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// Great coding <3



function power(x,y) {
    // return x**y;
    if(y===0) {
        return 1;
      }
    let result = x;
    for(let i=0; i<y-1; i++) {
        result = x*result;
    }
    return result;
}



    console.log(power(1,701270));
    console.log(power(2,2));
    console.log(power(3,2));
    console.log(power(-1,40));


// describe("Tests", function(){

//     Test.assertEquals(power(1,701270), 1);
//     Test.assertEquals(power(2,2), 4);
//     Test.assertEquals(power(3,2), 9);
//     Test.assertEquals(power(-1,40), 1);
      
//     });
    