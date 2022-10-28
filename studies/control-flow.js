/**
 * 
   _____ ____  _   _ _______ _____   ____  _        ______ _      ______          __
  / ____/ __ \| \ | |__   __|  __ \ / __ \| |      |  ____| |    / __ \ \        / /
 | |   | |  | |  \| |  | |  | |__) | |  | | |      | |__  | |   | |  | \ \  /\  / / 
 | |   | |  | | . ` |  | |  |  _  /| |  | | |      |  __| | |   | |  | |\ \/  \/ /  
 | |___| |__| | |\  |  | |  | | \ \| |__| | |____  | |    | |___| |__| | \  /\  /   
  \_____\____/|_| \_|  |_|  |_|  \_\\____/|______| |_|    |______\____/   \/  \/    
                                                                                    
                                                                                    

 */

  /**
   * //Summary//
   * Control flow is how code is ran from top to bottom.  With conditional statements and loops
   * the flow can be changed. 
   * 
   * //Loops//
   * Loops are statements that will iterate til there is nothign to loop over or a condition becomes false.
   * In reference to control flow that means it causes the flow to repeate it self until the loop is over
   * The different kinds of loops are covered in depth in the loops document.
   * 
   * //Conditional Statements//
   * Conditional statements are used when you want different actions perform depending on the different conditions.
   * In javascript there are  conditonal statements such as if, else if, else, switch and ternary operators. 
   * They effect control flow by creating branching paths and directed the logic to go a certain way.
   * 
   * //if//
   * The if statement is used when code is meant to be run when the condition is true.
   *  The conditions are tested between points of data with comparative operators.
   *  When the conditions tested resolve to true the code is executed and if they do not resolve to true
   * the code is not executed.
   * The strucure of an if statement is as follows if(condition to be test){code block to execute}
   *  The bang operator (!) can be used to inverse the logic to look for if the condition is false. 
   * !!Example!!
   * 
   *  if( 5 < 6){ 
   * console.log("Good Job")} // the code executes because 6 is indeed greater than 5.
   * 
   * if (5 > 6){
   * console.log("Good Job")} // the code will not execute because 5 is not larger than 6
   * 
   * if(5 !== 6){
   * console.log("woot")} // the code will run because 5 does not equal 6
   * 
   * if(true){
   * console.log("that works")} // this code does not include a comparative operator but because the condition resolves to true the code runs
   * 
   * //else if//
   * The else if statement applys another conditional test when the previous test condition is false
   * 
   * !!Example!!
   *  let gas = 40
   * if( gas > 51 ){
   * console.log("dont worry")}
   * else if (gas <= 50 && gas > 20){
   * console.log( "start worrying")
   * else{ console.log("get gas")} //this would execute on the else if
   * 
   * 
   * //else//
   *  The else statement specifies a block of code to run when an if statement is false.
   * !!Example!!
   *  if( moon === "full"){
   * condition = "werewolf"}
   * else{ 
   * condition = "human"}  // the else statement will be executed if the moon does not === "full"
   * 
   * //switch//
   *  The switch statement is used to evaluate an expression against a series of case clasues.
   *  It executes the first  case clause with a matching value until it encouters a break statement.
   * The statement contains a default clause for when none of the case clauses match.
   *  Switch statements are always looking for if a condition is strictly equaly to the condition of the statement.
   *  It is less flexable than the other kinds of conditional statements
   * !!Example!!
   * 
   * const console = playstation
   *  switch(console){
   * case "xbox":
   * console.log("its an xbox")
   * break;
   * case "nintendo":
   * console.log("its a nintento")
   * break;
   * case "playstation":
   * console.log("its a playstation")
   * break;
   * default:
   * console.log("whats that")
   * } // this would resolve to logging "its a playstation"
   * 
   * 
   *  //Ternary Operators//
   *  The Ternary operator also is a conditional statement.
   * It takes in three operands. A condition to test then a ? followed by an expression if the condition is true 
   * then a colon followed by an expression to execute if condition is false.
   * It is possible to rewrite if.. else statements with ternary operators.
   *  !!Example!!
   * let age = 50;
   * let output;
   *  if( age >= 50){ output = "user is older than 40"}
   * else{ output = "user is younger than 40"}
   * 
   *  // to rewrite with a ternary operator
   * let age = 50
   *  let output = age >= 40 ? "user is older than 40" : "user is younger than 40" // output would resolve to the truthy condition
   */