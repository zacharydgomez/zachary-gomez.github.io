// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  // empty array to put the new data into
let output = []
// using reduce to iterate through all the values and then concating them into a single array
output = arr.reduce((acc, count)=> acc.concat(count), [])
// returning the value
return output
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, tfunc, ufunc, bfunc) {
for(let start = val; 
  tfunc(start); 
  start = ufunc(start)){
  bfunc(start)
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
for( let ele of array){
  //returns false if every test does not return true
  if(!test(ele))return false;
}
  return true
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
// create two arrays to store rtl values and ltr values
let ltr = [];
let rtl = [];
 //iterate through string
 for(let i =0; i < string.length; i++){
  let code = string.charCodeAt(i);
  let script = characterScript(code);
  if(script !== null){
    if(script.direction === "ltr"){
      ltr.push(script)
    }
    else{rtl.push(script);
    }
  }
 }
 if (ltr.length > rtl.length){
  return 'ltr'
 } else {return 'rtl'}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
