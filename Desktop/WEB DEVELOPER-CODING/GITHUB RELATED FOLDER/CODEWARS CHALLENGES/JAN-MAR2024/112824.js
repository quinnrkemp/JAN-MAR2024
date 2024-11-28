    // CHALLENGE NAME- Beginner - Lost Without a Map
 

    // DESCRIPTION:

    // Given an array of integers, return a new array with 
    // each value doubled.

    // For example:
    
    // [1, 2, 3] --> [2, 4, 6]

    // // ***STARTER CODE***

    // function maps(x){

    // } 

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", ()=>{
    //   it("Fixed tests", () => {
    //     assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    //     assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    //     assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
    //   });
    // });

    // ******MY ANSWER********

    function maps(x){
        let d=[]
         x.forEach((e) => d.push(e*2))
          return d
        }