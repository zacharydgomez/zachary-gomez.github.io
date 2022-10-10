/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}
animal.species = "hummingbird"
animal["name"] = "Jose"
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "buzz"
noises.splice(1, 1, "swoosh")
noises.push("hum")
noises[noises.length] = "caw"
console.log(noises.length)
console.log(noises.slice(-1))
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises
animal.noises.push("flap")

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal)
console.log(animals)
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}
animals.push(duck)
console.log(animals)
var snake = {species: "snake", name: 'Sally', noises: ['hiss', 'slide', 'rattle', 'gulp']}
animals.push(snake)
var goat = {species: 'goat', name: 'Billy', noises: ['bleet', 'bawww', 'yawn', 'clash']}
animals.push(goat)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 // For choosing a list of friends I chose an array because it can hold an index list and keys seem unnessary
 // binding friends to an empty array
 var friends = [];
 // calling a function named getRandom() with a single parameter
 function getRandom(animals){
  // setting the min value to 0
  min = Math.ceil(0);
  // setting the max value to animals.length -1
 max = (animals.length - 1)
   //using Math.random() to get a random number
   return Math.floor(Math.random() * (max - min + 1) + min)}
 // assiging the random index number on animals to friends array
   friends[0] = animals[getRandom(animals)]["name"]
// checkking work
console.log(friends)
animals[0]["friends"] = friends
console.log(animals)
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}