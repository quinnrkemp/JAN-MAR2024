 // CHALLENGE NAME-  Sort and Star

    // DESCRIPTION:

    // You will be given a list of strings. You must sort 
    // it alphabetically (case-sensitive, and based on the 
    //     ASCII values of the chars) and then return the 
    //     first value.

    // The returned value must be a string, and have "***" 
    // between each of its letters.
    
    // You should not remove or add elements from/to the array.
    
    
    // // ***STARTER CODE***

    // function twoSort(s) {

    // }    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests",() =>{
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    //     assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
    //   });
    // });

    // ******MY ANSWER********
    function twoSort(s) {
        let first= s.sort()
        return first[0].split('').join('***')
        }