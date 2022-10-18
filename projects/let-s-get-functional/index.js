// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 * npm start --prefix ./zachary-gomez.github.io/projects/let-s-get-functional
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// implement _.filter() to return array of male customers //use .indexof too
let males = _.filter(array, function(customer){
    //return true if the input customer is male
    return customer.gender === "male";
})
return males.length;

};

var femaleCount = function(array){
    // implement .reduce( ) to return the number of female custeromrs
    let numFemales = _.reduce(array, function(acc ,current, index, array){
        // acc = 0 current = {}
        //interact with the current custer object to keep track of the number
        // of female custoemrs

        if (current.gender === 'female'){
            acc += 1;
        }
        return acc;
    }, 0);
    return numFemales;
};
/**
 * invokde reduce()
 * seed or no seed = 0
 * for loop
 *0
 result = func(result, {customer, 0, [...])
 */

var oldestCustomer = function(array){
    
    // assiging the outcome of .reduce to the variable old
    // passing a function in the argument
   let old = _.reduce(array, function(acc, current){
    // if the age of the current object is greater than acc.age the object is replaced by current
      if(current.age > acc.age){acc = current;}
      //returns that object
      return acc
  }
      
    
   )
   // returns the object of acc with the value in the key name
    return old.name
  };


var youngestCustomer = function(array){
    // binding the result of reduce to young
    //function within the reduce parameters
    let young = _.reduce(array, function(acc, current){
        // if conditional that if the current age is less than the acc age acc = current
        if (current.age < acc.age){ acc = current;}
        // return acc
        return acc
    }
    )
    // returns the object that has the lowest age
    return young.name
};

var averageBalance = function(array){
    // empty number to put result into
   let avg = 0; 
   // reduce to loop through array and add up the balances
     _.reduce(array, function(acc ,current, i){
        
let amt = current.balance;
// parseint to parse through a string arugment and return an interger
// using a regex method to replace all strings with integers
avg += parseInt(amt.replace(/[^\w\s]/g, ''), 10) / 100;

    }, 0);
    let result = avg / array.length;

    return result

     
}; //regex -> searches for patterns in a string .replaceAll(?, "") method // lt newString = blanace.replace(/[$,]/g,"");

// i want to input a letter and have the function count how many names in an array will start with that letter
// case insensitive .touppercase
var firstLetterCount = function(array, letter){
     //reduce the array to iterate through the array
     
return _.reduce(array, function(seed, obj){
    // checks the first letter of the name value against the letter input to the function
if(obj.name[0].toUpperCase()=== letter.toUpperCase()){
    // if true adds 1 to seed
    seed += 1;
}
//returns seed value as total number of words starting with first letter
return seed;
}, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
    
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
