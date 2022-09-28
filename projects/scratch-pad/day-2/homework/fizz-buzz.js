// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //for loop starting at 1 and ending at 100
    for ( var x = 1; x <= 100; x++){
        //using the remander operator to check if a number has a remander
        if ( x % 5 == 0  && x % 3 == 0 ){console.log("FizzBuzz")}
        //else if continueing to use remander
     else if (x % 3 == 0 ){console.log("Fizz")}
     //else if coninueing to use remander
     else if (x % 5 == 0 ){console.log("Buzz")}
     //finishing the conditional statement with log x if numbe rhasnt changed
     else (console.log(x))
     }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}