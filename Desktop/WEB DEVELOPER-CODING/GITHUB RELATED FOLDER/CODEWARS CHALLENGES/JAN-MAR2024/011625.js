    // CHALLENGE NAME-  Remove exclamation marks

    // DESCRIPTION:

    // Write function RemoveExclamationMarks which removes all 
    // exclamation marks from a given string.

    // // ***STARTER CODE***

    // function removeExclamationMarks(s) {
    //     return '';
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Tests", () => {
    //   it("test", () => {
    //     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    //   });
    // });

    // ******MY ANSWER********

    function removeExclamationMarks(s) {
        return s.split('').filter((e) => e != '!').join('')
        
        }