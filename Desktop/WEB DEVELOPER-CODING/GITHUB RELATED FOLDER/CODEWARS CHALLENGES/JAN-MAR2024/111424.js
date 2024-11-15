    // CHALLENGE NAME-  Contamination #1- String   ***practice***

    // DESCRIPTION:

    // An AI has infected a text with a character!!

    // This text is now fully mutated to this character.
    
    // Starting with the original text, and given a character, 
    // return the text once it has been mutated so that all of 
    // the characters in the original text have been replaced 
    // with the character.
    
    // If the text or the character are empty, return an empty 
    // string.
    // There will never be a case when both are empty as nothing 
    // is going on!!
    
    // Note: The character is a string of length 1 or an empty string.
    
    // Example
    // text before = "abc"
    // character   = "z"
    // text after  = "zzz"

    // // ***STARTER CODE***

    // function contamination(text, char){
    //     // Code here ;)
    //   } 

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    
    // describe("Sample tests", () => {
    //   it("Should pass sample tests", () => {
    //     assert.strictEqual(contamination("abc","z"), "zzz")
    //     assert.strictEqual(contamination("","z"), "")
    //     assert.strictEqual(contamination("abc",""), "")
    //     assert.strictEqual(contamination("_3ebzgh4","&"), "&&&&&&&&")
    //     assert.strictEqual(contamination("//case"," "), "      ")
    //   });
    // });

    // ******MY ANSWER********

    function contamination(t, c){
        return t.split('').map((a)=>c).join('')
          // Code here ;)
        }