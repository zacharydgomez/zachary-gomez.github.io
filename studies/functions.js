/**
 * 
  ______ _    _ _   _  _____ _______ _____ ____  _   _  _____ 
 |  ____| |  | | \ | |/ ____|__   __|_   _/ __ \| \ | |/ ____|
 | |__  | |  | |  \| | |       | |    | || |  | |  \| | (___  
 |  __| | |  | | . ` | |       | |    | || |  | | . ` |\___ \ 
 | |    | |__| | |\  | |____   | |   _| || |__| | |\  |____) |
 |_|     \____/|_| \_|\_____|  |_|  |_____\____/|_| \_|_____/ 
                                                              
                                                              

 */
/**
 * Summary: Functions are blocks of reusable code that can perform the same action in many places.
 * They are an essential for programing in Javascript.
 * Functions take in some input and return an output.
 * Javascript has built in functions but it is also possible to create new functions.
 * 
 * //Defining Functions//
 *  Functions can be declared as function expressions, function statements, and as arrow functions.
 * Function declaration starts with the keyword function, followed by the name of the function,
 *  a list of parameters enclosed in parenthese and seperated by commas. After that a code block 
 * follows within {}. In function expressions and statements the return keyword is used to return a value. 
 * If there is no return  then a functions value is undefined.
 * 
 * 
 * !!Example!!
 * function makeBig(size, increase){
 *  return size + increase;}
 * 
 *  Function expressions are created by declaring a variable and initializing it to a function. 
 * It is possible to have an anonymous function defined this way.
 * 
 *  !!Example!!
 *  const small = function makeSmall(size, decrease){
 *  return size - decrease}
 * 
 * Or in the case of an anonymouse function
 *  const double - function( size, exponent){
 *  return size ** exponent }
 * 
 *  It is also possible to declare a function within a object. These are called methods. 
 * 
 * //Function Parameters//
 *  Parameters are the names listed in the function definition that arguments are passed into.
 * Parameters are just names while arguments are the actual values.
 * 
 * //Calling Functions//
 *  Once a function has been defined to actually execute the actions indiciated in the function it must be called.
 * To call a function, the function name must be input followed by parenthese. Within the parenthese  the arguments are passed.
 *  The arguments then are acted upon in place of the parameters.
 * Functions must be within the scope they are called.
 * 
 *   !!Example!!
 * let x = 5
 * let y = 6
 * makeBig(5,6) // This would output 11
 * 
 * //Function Hoisting
 * 
 * All function declarations are hoisted to the top of the scope. 
 * Function Expressions are not hoisted to the top of the scope.
 *  !!Example!!
 *  // This would log 13 because the declaration is hoisted to the top of the global scope
 *  console.log(makeBig(6, 7)) 
 * 
 * function makeBig(num1, num2){
 * return num1 + num2}
 * 
 *  // This would log a refference error because makeSmall has not been initialized yet.
 * console.log(makeSmall(7, 6))
 * 
 * let makesmall = function(num1, num2){
 * return num1 - num2}
 * 
 * //Function Scope// 
 *  When a variable is defined within the function it cannot be accessed anywhere outside of the function.
 * This is because the variable is defined in the scope of the function. A function can access all the variables 
 * defined in the global scope. If a function is defined within another function it can access the variables of the parent function.
 * 
 *          !!Example!!
 * // These variables are in the global scope
 * let dog = "koji"
 * let cat = "sart"
 * 
 *  // This function is in the global scope and can acesss the global variables
 * 
 *  function dogAndCat(){
 *  let output = dog  + " chases " + cat
 * return output}
 * 
 *   // This function attemps to reference output from the above function but cannot.
 * This is because the variable output is bound to the scope of the function.
 * When called a Reference error will appear in the console
 * 
 *  function attempt(){
 *  return console.log(output)}
 * 
 * 
 * //Closure//
 * 
 * Closure gives acces to an outer functions scope to an inner function.
 * 
 *  !!Example!!
 * // This function has an inner function that accesses the str parameter from the above scope.
 * 
 *  function shout(str){
 * let yell = function(){
 *  return str;} 
 * return yell;
 * }
 * 
 * //Arrow functions//
 * Arrow functions are another way to define a function.  Arrow functions provide a shortened alternative to the other declerations.
 * When declare they are always anonymous. 
 *      !!Example!!
 * 
 * // Traditional function
 *  function sum(num + num2){
 * return num1 + num 2}  
 * 
 * //arrow function
 *  let sum = (num1, num2 => num1 + num2) //returns the same as the sum function
 * 
 * 
 * 
 * 
 */