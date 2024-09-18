 // CHALLENGE NAME-  Convert number to reversed array of digits

    // DESCRIPTION:

    // Given a random non-negative number, you have to 
    // return the digits of this number within an array 
    // in reverse order.

    // Example(Input => Output):
    // 35231 => [1,3,2,5,3]
    // 0 => [0]

    // // ***STARTER CODE***

    // function digitize(n) {
    //     //code here
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    //     assert.deepEqual(digitize(0),[0]);
    //   });
    // });
    

    // ******MY ANSWER********

    function digitize(n) {
     return String(n).split('').map(Number).reverse()
      }

    //   *****not my solution***