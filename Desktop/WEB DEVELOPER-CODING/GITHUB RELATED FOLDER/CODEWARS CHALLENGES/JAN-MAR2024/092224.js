 // CHALLENGE NAME-  Sum of differences in array

    // DESCRIPTION:

    // Your task is to sum the differences between consecutive 
    // pairs in the array in descending order.

    // Example
    // [2, 1, 10]  -->  9
    // In descending order: [10, 2, 1]
    
    // Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
    
    // If the array is empty or the array has only one 
    // element the result should be 0 (Nothing in Haskell, 
    //     None in Rust).

    // // ***STARTER CODE***

    // function sumOfDifferences(arr) {
    // }   

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe('Sample tests', () => {
    
    //   it("sumOfDifferences([1, 2, 10]", function() {
    //     assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
    //   });
    
    //   it("sumOfDifferences([-3, -2, -1])", function() {
    //     assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
    //   });
    // });

    // ******MY ANSWER********

    function sumOfDifferences(arr) {
        return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
    }

    // ***answer from the solutions***