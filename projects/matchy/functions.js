/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I am creating a function named search with the parameters arr and str
function search(arr, str){
    //setting a variable value to no
    var no = null
    //a for loop to iterate through the indexes of arr
    for(var i = 0; i < arr.length -1;i++){
        //and if statement to change the value of no if str is found in a index of arr
    if (str === arr[i].name){
        no = arr[i]}

     
}
//returning the value of no
return no
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, str, obj){
    // a loop to iterate over the array
    for(let i = 0; i < arr.length -1;i++){
        // if condition where if an object in the array has the
        // same value as the string it will replace the object with the replacement object
        if(str === arr[i].name){
            arr[i] = obj
            
        }   
              
}

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(arrAnimals, animalname){
    //loop to iterate over the arrAnimals array
    for(let i = 0; i < arrAnimals.length -1;i++){
        //if statement to check if animalname's value exsist within the arrAnimals array
    if (animalname === arrAnimals[i].name ){
        //splices the array to remove it from the 
        arrAnimals.splice(i, 1)
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function add(animals, animal){
    // made a function name check to test if an animals name is already within the array 
     function check(arr){
        //for loop to iterate over the array
        for (var i = 0; i <arr.length; i++){
            //conditional to make the function return true if the 
            //new name is already within the array
        if(arr[i].name === animal.name){
            return true}
     }
    }
    // for loop to iterate over the array
     for(let i = 0; i < animals.length -1;i++){
        //big conditional statement to check a few different relationships
        // checks to see if the function is false, if it is it moves on
        //to the next step in the conditional
 if (check(animals) !== true &&
 //checks the length of name and species to make sure it is greater than 0
    animal.name.length > 0 &&
     animal.species.length > 0 && 
     //makes sure the name is not already in the animals index
     animals[i].name !== animal.name
     
     && animals.includes(animal) === false){
     animals.push(animal);
    }
 }
   
 }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
