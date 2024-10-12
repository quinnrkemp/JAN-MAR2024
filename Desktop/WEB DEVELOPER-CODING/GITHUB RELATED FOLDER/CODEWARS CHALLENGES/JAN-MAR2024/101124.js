    // CHALLENGE NAME-  Count of positives / sum of negatives

    // DESCRIPTION:

    // Given an array of integers.

    // Return an array, where the first element is the count of 
    // positives numbers and the second element is sum of 
    // negative numbers. 0 is neither positive nor negative.
    
    // If the input is an empty array or is null, return an 
    // empty array.
    
    // Example
    // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, 
    // -14, -15], you should return [10, -65].

    // // ***STARTER CODE***

    // function countPositivesSumNegatives(input) {
    //     // your code here
    //   }    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Example tests", () => {
    //   it("Testing for fixed test 1", () => {
    //     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    //     let actual = countPositivesSumNegatives(testData);
    //     let expected = [10, -65];
    //     assert.deepEqual(actual, expected);
    //   })
        
    //   it("Testing for fixed test 2", () => {
    //     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    //     let actual = countPositivesSumNegatives(testData);
    //     let expected = [8, -50];    
    //     assert.deepEqual(actual, expected);
    //   });
    // });

    // ******MY ANSWER********

    // function countPositivesSumNegatives(inp) {
    //     const map1 = inp.filter((x) => x >0)
    //     const map2 = inp.filter((x) => x <0)
    //     const map3= map2.reduce((a,b)=>a+b,0)
    //     let newArr= [map1.length, map3]
    //     if (newArr===[] || newArr=='null'){
    //       return []
    //     }
    //     return newArr
    //       // your code here
    //     }

    function countPositivesSumNegatives(inp) {
        if (inp === null || inp.length === 0) {
           return []
         }
       const map1 = inp.filter((x) => x >0)
       const map2 = inp.filter((x) => x <0)
       const map3= map2.reduce((a,b)=>a+b,0)
       let newArr= [map1.length, map3]
       // if (newArr===[] || newArr=='null'){
       //   return []
       // }
       return newArr
         // your code here
       }

    //    *****needed to move the "if" statement above everything else 
    //  ****for the solution to fully work