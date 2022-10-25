/**
 * 
  _      ____   ____  _____   _____ 
 | |    / __ \ / __ \|  __ \ / ____|
 | |   | |  | | |  | | |__) | (___  
 | |   | |  | | |  | |  ___/ \___ \ 
 | |___| |__| | |__| | |     ____) |
 |______\____/ \____/|_|    |_____/ 
                                                                     
 */
/**
 *  //Summary//
 * Loops are important for repeatedly executing code blocks in Javascript. 
 * They will perform a task repeatedly based upon a condition being true and stop when it is false.
 * They offer a stratagy to iterate through objects and arrays.
 * Javascript supports a variety of loops.
 * They each offer various mechanisms to determine the start and end of a loop.
 * 
 *  //for statement//
 *  A for loop continues until a condition is evaluted to false. 
 *  It consist of a For keyword and an intitial expression, a conditional expression, and an incremental expression.
 *  For loops are very useful in iterating through an array.
 * 
 *      !!Example!!
 * Here is an example of a for loop that is intitialized at 0,
 *  then the conditional statement evaluates whether or not the statement is true
 * and each iteration the value of i incriments by 1
 * 
 *  for (let i = 0; i < 10; i++){}
 *  console.log(i); // output: 0,1,2,3,4,5,6,7,8,9
 * The same can be done by using the decriment operator to count down.
 * for (let i = 10; i > 0; i--){}
 *  console.log(i); // output: 10,9,8,7,6,5,4,3,2,1
 * 
 * When iterating through an array the conitional statement to the length of the array.
 * With this value it is then possible to referce each index in the array.
 * You can apply the statement to each index within the array.
 * 
 *  arr = [1,2,3,4,5,6]
 *  for ( let i = 0; i < arr.length; i++){ arr[i] += 5}; // returns the array altered as arr = [6,7,8,9,10,11]
 * 
 *  //for...in statement//
 *   When iterating through an object, a for...in statement iterates through the enumerable properites found in the keys of the object.
 *   The loop executes once through each property of the object.
 *      !!Example!!
 *  let kitchen = { size : "big", heating : "gas", color: "yellow"};
 * for(let prop in kitchen){
 * console.log(kitchen[prop])
 * } // this would log big, gas, yellow
 * 
 *  // for.. of statement//
 *  This statement iterates through the values of an iterable object, such as arrays and strings.
 *  Added in ES6
 * 
 *      !! Example!!
 * let arr = [1,2,3,4,5,6]
 * 
 * for (let index in arr){
 * console.log(array[index] += 2)
 * } // this adds two to each element of the array by iterating through each index of the array.
 * 
 *  //while statement//
 *  While statements executes its code as long as a specific condition evaluates to true.
 * The condition is tested before the statement in the loop is executed. It loops until the condition proves false.
 *     !!Example!!
 *  let x = 5
 *  let y = 10
 * while (x < 10){
 * x++
 * y +=10
 * } // This will add 10 to y each time the loop executes, which is until x is = 10. 
 *  console.log(y) // returns 60
 */