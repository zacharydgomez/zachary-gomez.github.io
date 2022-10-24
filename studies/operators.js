/**
 * 
   ____  _____  ______ _____         _______ ____  _____   _____ 
  / __ \|  __ \|  ____|  __ \     /\|__   __/ __ \|  __ \ / ____|
 | |  | | |__) | |__  | |__) |   /  \  | | | |  | | |__) | (___  
 | |  | |  ___/|  __| |  _  /   / /\ \ | | | |  | |  _  / \___ \ 
 | |__| | |    | |____| | \ \  / ____ \| | | |__| | | \ \ ____) |
  \____/|_|    |______|_|  \_\/_/    \_\_|  \____/|_|  \_\_____/ 
                                                                 
                                                                 

 */

  /**
   * 
   * //Summary// 
   * Operators is how data connects to each other in Javascript. 
   *  Operators are special symbols used to perform operations on operands.
   *  Operands are values and variables
   * 
  * //Assignment operators//
  * 
  * Assignment operators assign a value to its left operand based on the value of the right operand.
  * 
  * !!Examples!!
  * assignment =
  * Assigns the operand on the left the value of the right operand
  *  x = "dog" ; x is now assigned the value of "dog"
  * 
  * addition assignment+=
  *  assigns the value of the right operand plus the left operand to the left operand
  *  x += 4; the value of x is now x + 4
  * 
  * subtraction assignment-=
  *  assigns the value of the right operand minus the left operand to the left operand
  *  x -= 4; the value of x is now x - 4
  * 
  * multiplication assignment*=
  *  assigns the value of the right operand multipled to the left operand to the left operand
  *  x *= 4; now the value of x is x * 4
  * 
  * division assignment/=
  *  assigns the value of the right operand divided to the left operand to the left operand
  *  x /= 4; now the value of x is x / 4
  * remainder assignment %=
  *   assigns the value of the left operand to the remainder of the left operand divided by the right operand.
  *  let x = 3
  *  x %= 2; x is now assigned to 1
  *  
  * exponentiation assigment **=
  *  assigns the value of the left operand multipled by itself by the value of the right operand
  *  x **= 4; now the value of x is x*x*x*x
  * 
  * 
  * 
  * //Comparison operators//
  *  Comnparison operators compares its operands and returns a value boolean value depending if it is true 
  * If two operands are no tthe same type Javascript will attempt to convert them into an appropriate type.
  * Typically this results in comparing them numerically.
  * 
  * !!Examples!!
  *  let x = 5
  *  let y =  6
  * 
  * equal ==
  *  returns true if operands are equal
  *  will attempt to convert to the appropriate type
  *  generally a good idea to aviod using this one
  * 
  *   x == 5;  returns true
  *   x == "5;" returns true
  * 
  * not equal !=
  *  returnss true if the operands are not equal
  *  will attempt to convert to the appropriate type
  *  x != 6; returns true
  *  y !=  '5'; returns true
  * 
  * strict equal ===
  * returns true if operand are equal and the same type
  * you should use this operator instead of the equal operator
  * 
  * x === 5; returns true
  * x === "5"; returns false
  * 
  * stric not equal !==
  * returns true if operands are not equalor are different type
  * you should use this operator instead of the not equal operator
  * 
  * x !== "5"; returns true
  * y !== "6"; returns true
  * 
  * greater than >
  *  returns true if the left operand is greater than the right operand
  *  x > y; returns false
  * 
  * greater than or equal >=
  * returns true if the left operand is greater to or equal to the right operand
  * 
  *  5 >= 5; returns true
  * 5 >= 4; returns true
  * 
  * less than <
  * returns true if the right operand is greater than the left operand
  * 5 < 6; returns true
  * 5 < 4; returns false
  * 
  * less than or equal <=
  * returns true if the right operand is greater than or equal to the left operand
  *  5 <= 5; returns true
  * 5 <= 7; returns true
  *
  * //Arithmetic operators//
  *  Arithemtic operators can take in either literal or variables with numerical values and return a single value.
  *  The standard arithmetic operations (=,-,*,/) work the same as they would in most situations.
  * Javascript also have other arithmetic operators that need explination.
  * 
  * !!Examples!!
  * remainder % (mondulo)
  * returns the integer remained of two operands divided
  *  20 % 6 returns 2
  * 
  * increment ++
  *  increases the value of its operand by 1.
  * if placed before the operand it returns the value of its operand after adding one
  * if placed after the operand it returns the initial value and the adds one.
  *  x++; returns 5 and then sets x value to 6
  *  ++x; returns 6
  * 
  * decrement --
  *  decrements the value of its operand by 1
  * works in the same fashion as the increment operator
  *  --x; returns 5 and then sets x value to 4
  *  x-- ;returns 4
  * 
  * unary negation -
  * turns a positive operand into a negative value or a negative operand into a positive.
  * -x; returns -5
  * 
  * unary plus +
  * attemps to convert an operand to a number
  * 
  * +"6" returns 6
  * +true; returns 1
  * 
  * exponentiaation operator **
  * calculates the first number to the second number as base ^ exponent
  *  4 ^ 3; returns 64
  * 
  * //Logical operators//
  *  Logical operators evaluate a set of statements and returns a specific boolean value.
  * 
  *  !!Examples!!
  * 
  * logical AND &&
  *   Asseses multiple expressions and returns a true if the expressions are true. 
  *   Otherwise returns false
  *  let example = true && true; returns true
  *  let example2 = true && false; returns false
  *  let example3 = false && false; returns false
  * 
  * Logical OR ||
  *  Assesses mupliple expressions and returns true if one of them is true
  *  let example4 = true || false; returns true
  *  let example5 = false || true; returns true
  * 
  * Logical NOT !
  *   Bang operator will convert a boolean value to its opposite.
  *  let exmaple6 = !false; returns true
  *  let example7 = !true; returns false
  * 
  * 
  * 
  * //Conditional (ternary) operator//
  *  The only operator in Javascript that takes three operands. The operator cna have one of two values based on a condition.
  *  If the condition is true then the left variable will assigned and if otherwise it will assign the right variable
  * 
  *   !!Example!!
  * const onfire = heat >= 600 ? 'fire' : 'not on fire'
  * if hea is great than 600 onfire would be assigned fire. Otherwise it would assign 'not on fire'
  * 
  * //Unary operators//
  * 
  *  Operators in Javascript that perferm an operation with only one operand.
  * 
  * !! Examples!!
  * 
  * delete
  *  Deletes an objects propery and if it succeeds will cause the property to yield undefined when access is attempted.
  * const myCar{ tires : 4, doors : 5, gas pedal : 1}
  * delete myCar.tires // returns true
  * myCar.tires // undefined
  * 
  * 
  * typeof
  *  Returns a string indicating the type of an operand
  *  const dog = "koji"
  *  const age = 33
  *  const favfood = [tacoes, pho, poboys]
  * 
  *  typeof dog; "string"
  *  typeof age; "number"
  *  typeof favfood; "object"
  * 
  * 
  * 
  * 
  *
  * 
  * 
  * 
  * 
  */

