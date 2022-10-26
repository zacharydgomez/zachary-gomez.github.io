/**
 * 
  _____       _______    _________     _______  ______  _____ 
 |  __ \   /\|__   __|/\|__   __\ \   / /  __ \|  ____|/ ____|
 | |  | | /  \  | |  /  \  | |   \ \_/ /| |__) | |__  | (___  
 | |  | |/ /\ \ | | / /\ \ | |    \   / |  ___/|  __|  \___ \ 
 | |__| / ____ \| |/ ____ \| |     | |  | |    | |____ ____) |
 |_____/_/    \_\_/_/    \_\_|     |_|  |_|    |______|_____/                                                                                                                        
 * 
 */
/**
 *  //Summary//
 * A value in Javascript is always of a certian type.
 * There are simple/primitive types such as number, string, boolean
 *      that contain a single value
 * There are complex datatypes such as arrays, objects, and functions
 *      that  can contain an indefinite amount of values
 * 
 * 
 * ~~Primitive~~
 *  Primitive value types are immutable
 * Primitive value types are atomic, which means that they hold a single value
 * 
 * 
 *      //Number//
 * Data type to indicate an integer, decimals, and exponentials
 * 
 *      !!Example!!
 * const num1 = 6
 * const num2 = 6.66
 * const num3 = 6^6
 * 
 *  Number can also include special values such as :  
 *   NaN: a typeof number that represents Not-A-Number. Represents when there is no numerical value
 *  
 * Infinity and negative Infinity
 * 
 *  Infinity is defined in javascript as a global object. A number reaches infinity when it 
 *  exceeds the upper limit for a number, 1.797693134862315E+308. 
 *  -Infinity is reached when a number reaches a lower limit of -1.797693134862316E+308 
 *  These values can be usefull or initializing computations involving comparisons of numbers.
 * 
 * 
 *      //String//
 *  Data type to store textual data. 
 * Strings contain zero or more characters within quoutes. 
 * Strings are indexed like an array.
 * Strings are immutable, meaning that the characters of a string  may not be changed.
 * 
 *      !!Example!!
 * let name = "zach"
 * name[0] = "Z"
 * console.log(name) => "zach"
 * 
 *  Must be enclosed in either "", '', ``
 *  Using backticks (``) allows for a string to span multiple lines
 * 
 *      !!Example!!
 * let bigDog = "koji"
 * let grouchyCat = "sart"
 * let name = `zach`
 * 
 * 
 *      //Boolean//
 * Datatype that holds true or false
 * Binary values that often work as switches to evaluate comparison operators with.
 *      !!Example!!
 *      (10 >9)=> true
 * 
 * 
 *      //BigInt//
 * Datatype used to represent values larger than  (2^53-1) or less than -(2^53-1)
 * Recently added and rarely used
 * 
 * 
 *      //Symbol//
 * Datatype that represents a unique identifier
 *  Even if two symbols have the exact same description they are different values
 *  Maybe used as an object property key
 * 
 *          !!Example!!
 * let id = Symbol();
 * 
 * 
 *      //undefined//
 *  Datatype of a variable that is declared but not uninitilized.
 * Functions will also return undefined if they do not contain a value return
 * 
 * 
 *      //null//
 * represents the intentional abscense of any object value
 * Only contains one value : null
 * Treated as falsy for boolean operations
 * 
 * 
 * 
 * 
 * 
 * ~~Complex~~
 *  Unlike primitive datatypes, complex datatypes represent a collection of values.
 * These can include objects, arrays, and functions
 * They can hold other datatypes within them
 * They are mutable: able to change and are of an indefinite size
 * 
 * 
 *      //Object//
 * Objects are a collection of Key: Value pairs. 
 * Each key is either a string or a symbol
 * Values can be anytype of data
 * Objects ARE NOT indexed
 * To access values in an object you must do so through their keys.
 *  
 *      !!Example!!
 * person.hasCar = > points to true
 * person["firstName"]=> points to zach
 * 
 * Objects are defined with an object literal
 * Objects properties exsist within {}
 * 
 *      !!Example!!
 * const person = {firstName:"zach", lastName:"gomez", age: 33, hasCar: True}
 * 
 * 
 *      //Array//
 * A zero index list than contain different values. 
 * Arrays values exsist with in [] and each index is sperated by a comma
 * 
 *      !!Example!!
 * let arr = [1,2,"dog", true]
 * 
 * To access an element in an array you can use the index
 * arr[2] = "dog"
 * 
 * 
 *      //Function//
 * A datatype that encapsulates reusable code
 * Uses the keyword function
 * Functions have inputs called paramters and return an output
 * 
 *      !!Example!!
 * function greaterThan(x,y){
 * if(x > y){ return true}
 * return false
 * }
 * greaterThan(6, 7) => returns false
 */