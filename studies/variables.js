/**
 * 
 _   _               _         _      _            
| | | |             (_)       | |    | |           
| | | |  __ _  _ __  _   __ _ | |__  | |  ___  ___ 
| | | | / _` || '__|| | / _` || '_ \ | | / _ \/ __|
\ \_/ /| (_| || |   | || (_| || |_) || ||  __/\__ \
 \___/  \__,_||_|   |_| \__,_||_.__/ |_| \___||___/
                                                                                                   
 * 
 * Summary: Variables are containers for storing data in Javascript.
 *  Variables can contain the values of primitives( such as values like Number, String, Boolean),
 * or in the case of a complex value( Object, Array, and function) variables point to a loction in memory where the value is stored.
 * Variables can then be used to be called up in the code in various places.
 * 
 * //Declaring a variable//
 * 
 *  In Javascript, creating a variable is called "declaring".
 * Until you intitize a variable the value is undefined
 * 
 * !!Example!!
 * var bigDog;
 * console.log(bigDog) => undefined
 * let grouchyCat;
 * console.log(grouchyCat) => undefined
 * 
 * 
 * // Initializing a variable//
 * 
 * Variables must be declared in JavaScript with var, let, or const
 * 
 *   !!Example!!
 * let x = "dog"
 * console.log(x) => prints dog
 * var y = true  
 * console.log(y) => prints true
 * const z = 5
 * console.log(z)=> prints 5
 *  */ 

 /**
  *  To decide what variable declaration to use, you must consider the use case.
  * The let keyword should be used any time  the value of your variable could change
  * The const keyword should be used any time you want the value of the variable to be fixed
  * The var keyword is from the pre 2015 edition of Javascript and should be used when the script must run in an older web browser.
  * 
  * !!Example!!
  * const amount1 = 20
  * const amount2 = 5
  * let total = amount1 + amount2
  *
  *
 * In this example the variables amount1 and amount2 are set with the const keyword
 * because they are constant values.
 * total is set with the let keyword because it is a value that could be changed by a future part of the code.
 * 
 * 
 * //Re-assignment//
 *  In the case of variables assigned with var or let they may be reassigned.
 * 
 * !!Example!!
 * x = "cat"
 * console.log(x) => prints cat
 * y = false
 * console.log(y) => prints false
 * 
 * 
 * //Scope//
 *  Scope is the current context that determines the visibility of variables.
 *  Before 2015 Javascript only had Global Scope and Function Scope.
 * 
 *  In Javascript there are now four kinds of scope:
 *      Global scope - default scope for all code 
 *      Module scope  - scope for code in module mode
 *      Function scope - scope created within a function
 *      Block Scope - scope between curley braces
 * 
 *  The var keyword is limited to Global Scope and Function Scope
 * The const and let keyword can also be included in the block scope of a function. 
 * This means that when these keywords are declared within {} they are only avaible to that block.
 * 
 * !!Example!!
 * 
 * // in the function barkAt a global variable is being refernced from the block scope
 * var bark = "roof"
 * function barkAt(string){
 * console.log(string + " " + bark )}
 * barkAt("Koji says")
 * 
 * // in this function meow is defined in the function scope and is not accessable in the global scope
 * function meowAt(string){
 * var meow = "meow"
 * console.log(string + " " + meow)}
 * meowAt("Sart says")
 * 
 *console.log(meow)
 * 
 * //Hosting//
 *  Hoisting is the default behavior in Javascript to move declarations to the top of the current scope.
 * var declations are hoisted to the top but are not initilized.
 * 
 * !!Example!!
 *  In this example using var, when console.log is used the output variable returns as undefined.
 *   function doSomething(num){
 * console.log( output)
 *  if( num >10){
 *    var output = num
 *  }
 *  return output
 *  }
 *
 *  console.log(doSomething(11))
 *
 * In this example using let, when using console.log an error will be created because 
 * let is hoisted to the top of the block scope it is found in within the if statement.
 * 
 * function doSomething(num){
 * console.log( output)
 *  if( num >10){
 *   let output = num
 *  }
 *  return output
 *  }
 *
 * console.log(doSomething(11))
 * 
 * The same result happens when you declare the variable using the const keyword happens
 * function doSomething(num){
 *  console.log( output)
 * if( num >10){
 *    const output = num
 * }
 *  return output
 * }
 *
 *   console.log(doSomething(11))
 *
 * 
 * 
 * !!Example!!
 * console.log(bigDog) => prints undefined
 * var bigDog = "koji"
 * console.log(bigDog) => prints "koji"
 * let and const are not hoisted to the top of the block. 
 * 
 * !!Example!!
 * console.log(grouchyCat) => throws a reference error
 * console.log(y) => also throws a reference error
 * const grouchyCat = "sart"
 * let y = true
 * 
 *  // var, let, const//
 *  A further explination of the three keyword types
 *  Each keyword has their own unique properties
 *  use let over var in most cases 
 * 
 *   /var/
 *  Only keyword pre es6
 * Allows for reassigable values
 *  var scope includes global and function
 * the declarations will be hoisted to the top but not the initilization
 * 
 *   /let/
 *  Considered an improvement over var
 * Introduced in es6, let allows for reassigable values.
 * let are block scoped and not hoisted
 * 
 *   /const/
 *  Introduced in es6, const allows variables values to become immmutable.
 *  const are block scoped and not hoisted
 *  Must be initilized when declared
 * 
 */