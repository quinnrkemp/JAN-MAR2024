    // CHALLENGE NAME-  Remove First and Last Character

    // DESCRIPTION:

// It's pretty straightforward. Your goal is to create a function that 
// removes the first and last characters of a string. You're given one 
// parameter, the original string. You don't have to worry about strings
//  with less than two characters.

//     // ***STARTER CODE***

//     function removeChar(str){
//         //You got this!
       
//        };   

//     //   ******TEST CASES*****
    
//     const chai = require("chai");
//     const assert = chai.assert;
//     chai.config.truncateThreshold=0;
    
//     describe("Tests", () => {
//       it("Fixed Tests", () => {
//         assert.strictEqual(removeChar('eloquent'), 'loquen');
//         assert.strictEqual(removeChar('country'), 'ountr');
//         assert.strictEqual(removeChar('person'), 'erso');
//         assert.strictEqual(removeChar('place'), 'lac');
//         assert.strictEqual(removeChar('ooopsss'), 'oopss');
//       });
//     });

    // ******MY ANSWER********

    function removeChar(str){
        return str.split('').slice(1,str.length-1).join('')
        
          // filter((word) => word[1])
        //   return str.split('').shift()
        //    .pop().shift().join('')
          
          //You got this!
        
        };
        