// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // creating a for loop to iterate through the array
  for(var i = 0; i < array.length; i++){
    //logging the indexs of the array
    console.log(array[i])}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //setting i to the array length-1, making the for loop subtract one til hitting 0
  for (var i = array.length-1; i >= 0; i--){
    //logging the index to console
    console.log(array[i])}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 * ex. getobjectkeys ({name: alex , age 35}) => name age*/
function getObjectKeys(object) { 
  // YOUR CODE BELOW HERE //
  //creat output array
  var keys = [];

  //iterate through object using for in loop
  for (var key in object){
    //push current key into keys array
    keys.push(key);
  }

  //return output array
  return keys;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //for in loop 
  for (var key in object){
    //logging the result of key and object[key]
    console.log(key, object[key])};
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //creating an empty array
  var objects = []
  //for in loop to iterate over the keys of an object
  for (var key in object){
    //push current keys into array
    objects.push(object[key])
  }
  //returnign array
  return objects
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //for loop to iterate the keys
  for (var key in object){
    //using bracket notation to call the objects
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //creating empty array
   var objects = []
   //using a for in statement to iterate over object
  for (var key in object){
    //pushing current keys into an array
   objects.push(object[key])
  }
  //using .length to find the length
  return objects.length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var objects = []
//for in loop to get the keys
  // push objexct values into an array
for (var key in object){
  objects.push[key];
}
//for loop in reverse to reverse the order
for ( var i = objects.length -1; i > 0;i--){
  //consloe logging
  console.log (object, objects[i]);
}
  //loop over the array backwards and print each value


  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
