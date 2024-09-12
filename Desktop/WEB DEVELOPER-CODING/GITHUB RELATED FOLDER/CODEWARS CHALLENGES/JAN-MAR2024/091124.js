 // CHALLENGE NAME-  Calculate average

    // DESCRIPTION:

    // Write a function which calculates the average 
    // of the numbers in a given list.

    // Note: Empty arrays should return 0.
    
    

    // // ***STARTER CODE***

    // function findAverage(array) {
    //     // your code here
    //     return 0;
    //   }

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(findAverage([1,1,1]), 1);
    //     assert.strictEqual(findAverage([1,2,3]), 2);
    //     assert.strictEqual(findAverage([1,2,3,4]), 2.5);

    // ******MY ANSWER********

    function findAverage(arr) {
        // your code here
      let sum= arr.reduce( (a,cur) => a + cur,0)  
      if (arr.length===0){
      // if (arr==[]){
        return 0
      }
      return sum/arr.length;
      
      }