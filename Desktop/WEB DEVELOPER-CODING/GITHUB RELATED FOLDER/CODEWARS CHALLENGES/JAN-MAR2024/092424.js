 // CHALLENGE NAME-  Sum of positive

    // DESCRIPTION:

    // You get an array of numbers, return the sum 
    // of all of the positives ones.

    // Example [1,-4,7,12] => 1 + 7 + 12 = 20
    
    // Note: if there is nothing to sum, the sum is 
    // default to 0.
    
    //     // ***STARTER CODE***

    //     function positiveSum(arr) {
  
    //     }   

    // //   ******TEST CASES*****
    
    // const { assert } = require("chai")

    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    //     assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    //     assert.strictEqual(positiveSum([]),0);
    //     assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    //     assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    //     });
    //   });

    // ******MY ANSWER********

    function positiveSum(arr) {
        let res = arr.filter((num) => num > 0)
         let total= res.reduce((a,b)=>a+b,0)
       if (res== []){
         return 0
       }
         return total
       }
       
       // ***this is my answer...yay!***

