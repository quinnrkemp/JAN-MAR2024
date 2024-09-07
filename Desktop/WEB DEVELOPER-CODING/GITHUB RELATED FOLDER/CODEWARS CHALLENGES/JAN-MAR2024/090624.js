 // CHALLENGE NAME-  Invert values

    // DESCRIPTION:

    // Given a set of numbers, return the additive inverse of each. 
    // Each positive becomes negatives, and the negatives become 
    // positives.

    // [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
    // [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
    // [] --> []
    // You can assume that all values are integers. Do not mutate 
    // the input array.

    // // ***STARTER CODE***

    // function invert(array) {
    //     return Number(...array);
    //  }  

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Invert array values",() => {
    //   it("Basic Tests", () => {
    //     assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    //     assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    //     assert.deepEqual(invert([]), []);
    //     assert.deepEqual(invert([0]), [-0]);
    //   });
    // });

    // ******MY ANSWER********

    function invert(array) {
        return array.map((x) => x * -1)
          
        //   return Number(...array);
        }

      