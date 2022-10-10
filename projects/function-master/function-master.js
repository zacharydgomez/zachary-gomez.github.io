//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { split, sortedIndex, some } = require("lodash");

function objectValues(object) {
  //using the Object.values() function to return the values of object in an array
  return  Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  // using the Object.keys()method to get all the keys in an array
  let x = Object.keys(object)
  //using the .join() method to return them all as a string
  return x.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  //creating an empty array
 let x = [];
//creating an empty string value
 let y = "";
 // for loop to iterate through the keys of an object
  for (let key in object){
    // if conditional statement checking the typeof value of each key
    if (typeof object[key] === "string"){
      // if true pushes the key into an array
        x.push(object[key]);
    }
}
//turns the array into a set of strings
return y = x.join(" ")
  }


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  //uses the Array.isArray() method to return "array" if true
    if (Array.isArray(collection)){return "array"}
    // else returns "object"
    else{return "object"}

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  //uses .toUpperCase() to uppercase the character at .charAt(0) then splices the old first character
  return string.charAt(0).toUpperCase() + string.slice(1) 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  // uses the .split(" ") function to split the string into an array
 let x = string.split(" ")
 // for loop to iterate through the array
 for (let i = 0; i < x.length; i++){
  //iterates through the array and uppercases the first character in each instance
   x[i] = x[i][0].toUpperCase()+x[i].substr(1)
 }
 //joins the array back to string
return x.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  // for loop to get the keys in an object
for (let key in object){
  // binding x to equal the key of an object
    let x = object[key]
    // binding y to apply uppercase to the first character of a key of the object
    let y = x.charAt(0).toUpperCase() + x.slice(1)
    // returning a statement with the uppercased value
    return  "Welcome" +" "+ y +"!"
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  // binding x to the value of Objects.values("keyword")
    let x = Object.values(object)
    //  y equats the uppercase value of the first index of the array
    let y = x[0].charAt(0).toUpperCase() + x[0].slice(1)
    // yy equals the value of the seoncd index of the array
    let yy = x[1].charAt(0).toUpperCase() + x[1].slice(1)
    // returing the statement
        return y + " "+ "is a" + " " + yy
    }


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  // binding x to equal "there are no noises"
  let x = "there are no noises"
  // for in loop to get the key of an object
for(let key in object){
  // if conditional statement stateing that if the objects key length is greater than zero x = object[key]
  if (object[key].length > 0){ x = object[key]
    //returns  x with the .join method
  return x.join(" ")}
}
// returns x if the conditional statement is false
return x
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  // using the .includes() method to return true if true
if(string.includes(word)){return true}
// uses the false method to return if false
else {return false}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  // using bracket notation to push the name value into the object key of friends
  object["friends"].push(name)
  // returns object
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  // uses the .hasOwnPropety() method to check if the object has the value "friends"
if(object.hasOwnProperty('friends')=== false){
  return false;}
  // else if to see if the friends key includes the name value
else if(object.friends.includes(name)){
  return true;}
  // else to return false if conditons are not met
else{return false;}
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  // binding x to an empty array
let x = []
// for loop to iterate through an array
for (let i = 0; i < array.length; i++){
  // conditonal statement to see if name is not equal to array.name
  if(name !==array[i].name &&
    // checks to see if the name is not included in the key's values
     array[i].friends.includes(name)==false){
      // pushes the name into the array
    x.push(array[i].name)
  }
}
return x
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  // if conditional statement checks if an object has the same key as the object
  if(object.hasOwnProperty(key) === Object.keys(object)){
    // returns the objects key
    return object[key]
  } else {
    //creates a key with the value
    object[key] = value;
  }
  return object
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  // for in loop to iterate on the keys in the object
 for(let key in object){
  //for loop to iterate through the array
 for(let i = 0; i <array.length;i++){
  // conditional statement to see if a key is within each index of the array
  if(array[i] === key){
    //deletes the key if found
    delete object[key]}
 }
 }


}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  // uses the  ... new Set() method to achive this
  // uses new to creat an array with .set() that only displaces a single instance of each value
  x = [... new Set(array)]
  return x
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}