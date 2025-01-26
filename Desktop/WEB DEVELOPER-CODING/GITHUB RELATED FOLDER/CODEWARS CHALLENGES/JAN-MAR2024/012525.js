    // CHALLENGE NAME-  Find the index of the second 
                         // occurrence of a letter in a string

    // DESCRIPTION:

    // In this kata, you need to write a function that takes a 
    // string and a letter as input and then returns the index of 
    // the second occurrence of that letter in the string. If there 
    // is no such letter in the string, or if the letter occurs only 
    // once in the string, -1 should be returned.

    // Examples:
    
    // for inputs  "Hello world!!!", 'l'  ->  return 3
    // for inputs  "Hello world!!!", 'A'  ->  return -1

    // // ***STARTER CODE***

    // function secondSymbol(s, symbol) {
    //     // your code
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    
    // describe("Fixed test cases", function() {
    //   it("Basic test cases", function() {
    //     assert.strictEqual(secondSymbol('Hello world!!!','l'), 3, 'Find the index of the second symbol "l" in the string');
    //     assert.strictEqual(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string');
    //     assert.strictEqual(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string');
    //     assert.strictEqual(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string');
    //     assert.strictEqual(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string');
    
    //   });
    // });

    // ******MY ANSWER********

    function secondSymbol(str, l) {
        let one=str.indexOf(l)
         return str.indexOf(l,one+1)
         // your code
       }