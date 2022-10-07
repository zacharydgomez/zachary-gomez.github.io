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
    for(let i = 0; i < arr.length -1;i++){
        if(str === arr[i].name){
            arr[i] = obj
            
        }   
              
}

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i = 0; i < animals.length -1;i++){
    if (name === animals[i].name ){animals.splice(i)
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function add(arr, obj){
     let x = obj.name.length
     let y = obj.species.length
    
     for(let i = 0; i < arr.length -1;i++){
 if ((x > 0) && (y > 0) && (arr[i] !== obj.name)){
     arr.push(obj)}
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
