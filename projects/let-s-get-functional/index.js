// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const object = require('underbar/object');

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
// i want to find out how many friends a customer has that start with a given letter
// iterate through customer to find given customer
// do something simular to last problem
var friendFirstLetterCount = function(array, customer, letter){
// make empty array
let match = {};
// iterate through array to find customer name
for (let i = 0; i < array.length; i++){
    if (array[i].name === customer){
        match = array[i];
        // break gets the function out of the for loop when the name is found
        break;
    }
}
// reduce to count the number of hits when you put letter in 
return _.reduce(match.friends, function(seed, current){
    if (current.name[0].toLowerCase() === letter.toLowerCase()){
        seed++;
    }
    return seed
},0)
};
 // find the customers names that have a given customers name in their firends list
var friendsCount = function(array, name){
    // empty array to put the output into
let count = []
// iterate over the array to get the obj
for( let i = 0; i < array.length; i++){
    // iterate through the friends array within the object with nested for loop
    for( let j = 0; j < array[i].friends.length; j++){
        //conditional to check if array contains name
        if(array[i].friends[j].name === name){
            // pushes the name into count
            count.push(array[i].name)
        }
    }
}
//returns the new array
return count
};
// find the three most common tags among all customers associated tags
var topThreeTags = function(array){
// pluck the tags out of object
let tags = _.pluck(array, "tags");
 // join the sub arrays into a string seperated with comma
let joined = tags.join();
//split the joined into an array at each ,
let split = joined.split(",");
// empty object to put the keys in
 let count = {};
 // create a key for every tag  matching its frequency
 _.filter(split, function(element){
    if(count.hasOwnProperty(element)===  false){
        count[element] = 0;
    }
    return count[element]++
 });
  // while loop to remove keys
 while (Object.keys(count).length > 3){
    for (let key in count){
        count[key]--;
        // removes key with a value less than 1
        if(count[key] < 1){
            delete count[key]
        }
    }
 }
 return Object.keys(count)
};

var genderCount = function(array){
    // create a 3 keyed object to put the values into
    let genders = {male: 0, female:0, ["non-binary"]: 0};
    // value to filter the male values of objects in an array
    let males = array.filter(element => element.gender === "male");
    // value to filter the female values of objects in an array
    let females = array.filter(element => element.gender === "female");
    // value to filter the non binary values of objects in an array
    let nb = array.filter(element => element.gender === "non-binary" );
    // pushing each values length into the genders object
    genders.male = males.length
    genders.female = females.length;
    genders["non-binary"] = nb.length
    return genders
};

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
