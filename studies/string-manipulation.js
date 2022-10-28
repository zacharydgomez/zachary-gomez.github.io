/**
 * 
 * 
   _____ _______ _____  _____ _   _  _____   __  __          _   _ _____ _____  _    _ _            _______ _____ ____  _   _ 
  / ____|__   __|  __ \|_   _| \ | |/ ____| |  \/  |   /\   | \ | |_   _|  __ \| |  | | |        /\|__   __|_   _/ __ \| \ | |
 | (___    | |  | |__) | | | |  \| | |  __  | \  / |  /  \  |  \| | | | | |__) | |  | | |       /  \  | |    | || |  | |  \| |
  \___ \   | |  |  _  /  | | | . ` | | |_ | | |\/| | / /\ \ | . ` | | | |  ___/| |  | | |      / /\ \ | |    | || |  | | . ` |
  ____) |  | |  | | \ \ _| |_| |\  | |__| | | |  | |/ ____ \| |\  |_| |_| |    | |__| | |____ / ____ \| |   _| || |__| | |\  |
 |_____/   |_|  |_|  \_\_____|_| \_|\_____| |_|  |_/_/    \_\_| \_|_____|_|     \____/|______/_/    \_\_|  |_____\____/|_| \_|
                                                                                                                              
                                                                                                                              

 */

 /** 
  * //Summary//
  *  Strings are used to hold data that can be represented in text form. 
  * The string global object has properties that allow you to change and access the strings values.
  * Strings are immutable so any change to a string will produce a new string.
  * 
  * //String length//
  *  The length property returns the length of a string.
  *  Every string has a an index that starts at 0.
  *  Knowing the length allows you to put at specific characters in a string.
  * 
  * !!Example!!
  *  let x = "dog"
  * console.log(x.length) // prints 3 to the console. D would be the index of 0, o would be the index of 1, g would be the index of 2 
  *  
  * 
  * //String slice()//
  * Slice takes a part of a string and returns that part in a new string.
  * Slice has two parameters: start and end.
  * 
  * !!Example!!
  * let z = "dog life"
  * let y = z.slice(1,2) // y would equal "o"
  * let q = z.slice(1) // q would equal "og life" because there is a start and no end
  * 
  * //String substring()//
  * 
  *   Simular to slice but if either argument is a negative it is treated as though it were 0
  * 
  * !!Example!!
  * let z = "dog life"
  * let y = z.substring(-1,2) // y would equal "do"
  * let r = z.substring( z.length - 4) // using the .length property is also possible. This would resolve to "life"
  * 
  * //String replace()//
  *  The replace method can replace a specified value with another value in a string.
  * It takes in two parameters
  * !!Example!!
  *  let message = "Welcome to New Orleans"
  * let newmessage = message.replace("New Orleans", "Kenner")
  * 
  * //String toUpperCase()//
  *  toUpperCase allows for an entire string to be converted to uppercase
  * 
  * !!Example!!
  *  let message = "turn up the volume"
  * let newMessage = message.toUpperCase() // the value of newMessage is now "TURN UP THE VOLUME"
  * 
  * //String toLowerCase()//
  * toLowerCase allows for an entire string to be converted to lowercase
  * !!Example!!
  *  let message = " I Am Fine"
  *  let newmessage = message.toLowerCase() // the value of newmessage is now "i am fine" 
  * 
  * //String concat()//
  *   concat allows for multiple strings to be joined into a single value.
  *  It is also possible to join strings with the + operator.
  * !!Example!!
  *  let note = "Gumbo"
  * let note1 = "and"
  * let note2 = "Rice"
  * let message = note.concat(" ",note1, " ", note2)
  * console.log(message) // prints "Gumbo and Rice"
  * let messagetwo = note2 + " " + note1 + " " + note
  * console.log(messagetwo) // prints "Rice and Gumbo"
  * 
  * // String trim()//
  * trim removes whitespace from both sides of a string
  * !!Example!!
  * let note = "   gumbo      "
  * let notetrim = note.trim()
  * console.log(notetrim) // prints "gumbo"
  * //String charAt()//
  * charAt points at a element based on its index position
  * !!Example!!
  * let text = "Halloween"
  * let textchar = text.charAt(0)
  * console.log(textchar) // prints "H"
  * 
  * //String split()//
  * split converts the string into an array
  * the parameter indicates where to split the string
  * if it is ommited the string returned as an array where the index 0 represents the whole string
  * if "" is used the array will return as an array of single characters
  * when using a charater as the sperator that character gets drop from the array.
  * !!Example!!
  * 
  *  let message = " we are cooking gumbo, when the weather drops below 80"
  *  message.split() // would return message as an array with a length of 1
  * message.spit("") // would return an array where every character is its own element
  * message.split(" ") // would return an array where every index is a word
  * message.split(",") // would return an array where every index would start where a comma is
  * message.split("w") // would return an array where ever index would start where a w is
  *  
  * 
 */ 