// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
var contact ={
id,
nameFirst,
nameLast,

} 
return contact
}


function makeContactList(id, nameFirst, nameLast) { //factory function
    
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return  {
 
        
        // we implemented the length api for you //
        length: function() { 
            return contacts.length 
        },
        // add contact function
        //uses .push to ass a contact object
        addContact: function(contact){
            return contacts.push(contact)},
        //find contact
        findContact: function(fullName){
            //gets the index of the contacts array
            for(var i = 0; i < contacts.length; i++){
// if the fullName is found  by concating the nameFirst and the nameLast it will return the name
                if(fullName === contacts[i]["nameFirst"] + " "+ contacts[i]["nameLast"]){
                    return contacts[i];}
            }
        },
        // removeContact function
        removeContact: function(contact){
            for(var i = 0; i < contacts.length; i++){
                if (contacts[i] === contact) {
                    //using .splice to remove values from contact list
                    return contacts.splice(i,1);
                }
            }
        },
        printAllContactNames: function(){
            // empty var named bigName to hold the values
            var bigName = [];
            //for loop to get the index of contacts
            for (var i = 0; i < contacts.length; i++){
                //creating a variable "name" and having it hold the contacts strings of nameFirst and nameLast
                var name = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                // using .push to change the value to the value of "name"
                bigName.push(name);
            }
            // using .join with "\n" as a linebreak
            return bigName.join("\n");
        }
    };}
        
    





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
