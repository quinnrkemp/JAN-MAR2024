    // CHALLENGE NAME-  Quarter of the year

    // DESCRIPTION:

    // Given a month as an integer from 1 to 12, return 
    // to which quarter of the year it belongs as an 
    // integer number.

    // For example: month 2 (February), is part of the 
    // first quarter; month 6 (June), is part of the 
    // second quarter; and month 11 (November), is part 
    // of the fourth quarter.
    
    // Constraint:
    
    // 1 <= month <= 12

    // // ***STARTER CODE***

    // const quarterOf = (month) => {
    //     // Your code here
        
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic Tests", () =>{
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(quarterOf(3), 1)
    //     assert.strictEqual(quarterOf(8), 3)
    //     assert.strictEqual(quarterOf(11), 4)
    //   });
    // });
    

    // ******MY ANSWER********

    function quarterOf(m){
        return m<4?1:m<7?2:m<10?3:4
          // Your code here
        }