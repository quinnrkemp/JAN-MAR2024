    // CHALLENGE NAME-  Remove duplicates from list

    // DESCRIPTION:

    // Define a function that removes duplicates from an array 
    // of non negative numbers and returns it as a result.

    // The order of the sequence has to stay the same.
    
    // Examples:
    
    // Input -> Output
    // [1, 1, 2] -> [1, 2]
    // [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

    // // ***STARTER CODE***

    // function distinct(a) {
    //     return [];
    //   } 

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Sample Tests", () => {
    //   it("test", () => {
    //     assert.deepEqual(distinct([1]), [1]);
    //     assert.deepEqual(distinct([1,2]), [1,2]);
    //     assert.deepEqual(distinct([1,1,2]), [1,2]);
    //   });
    // });
  
    // ******MY ANSWER********

    function distinct(arr) {
        let res = []; 
        
        for(let i = 0; i < arr.length; i++){
          if(!res.includes(arr[i])){
            res.push(arr[i]);
          }
      }
      return res;
      }