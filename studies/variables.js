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
 * Variables can then be used to be called up in the code are various places.
 * 
 * Declaring a variable
 * 
 *  In Javascript, creating a variable is called "declaring".
 * Until you intitize a variable the value is undefined
 * 
 * Example!!
 * var bigDog;
 * console.log(bigDog) => undefined
 * let grouchyCat;
 * console.log(grouchyCat) => undefined
 * 
 * 
 * Initializing a variable
 * 
 * Variables must be declared in JavaScript with var, let, or const
 *   Example!!
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
  * Example!!
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
 * Re-assignment
 *  In the case of variables assigned with var or let they may be reassigned.
 * Example!!
 * x = "cat"
 * console.log(x) => prints cat
 * y = false
 * console.log(y) => prints false
 * 
 * 
 * Scope
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
 * Hosting
 *  Hoisting is the default behavior in Javascript to move declarations to the top of the current scope.
 * 
 * let and const are hoisted to the top of the block but remain not initilized.
 * 
 * 
 * 
 * 
 * var
 * global scoped
 * hoisted 
 * reassignable
 * 
 * let
 * block scoped
 * not hoisted
 * reassignable
 * 
 * const
 * block scoped
 * not hoisted
 * not reassignable
 * 
 * 
 * 
 */