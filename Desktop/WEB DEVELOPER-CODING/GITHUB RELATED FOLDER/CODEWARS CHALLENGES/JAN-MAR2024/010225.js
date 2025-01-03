    // CHALLENGE NAME-  Grasshopper-Summation

    // DESCRIPTION:

    // Summation
    // Write a program that finds the summation of every 
    // number from 1 to num. The number will always be a 
    // positive integer greater than 0. Your function only 
    // needs to return the result, what is shown between 
    // parentheses in the example below is how you reach 
    // that result and it's not part of it, see the sample 
    // tests.
    
    // For example (Input -> Output):
    
    // 2 -> 3 (1 + 2)
    // 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

    // // ***STARTER CODE***

    // var summation = function (num) {
    //     // Code here
    //   }

    // //   ******TEST CASES*****
    
    // const assert = require('chai').assert;

    // describe('summation', function () {
    //   it('should return the correct total', function () {
    //     assert.strictEqual(summation(1),  1);
    //     assert.strictEqual(summation(2),  3);
    //     assert.strictEqual(summation(8), 36);
    //   })
    // })

    // ******MY ANSWER********

    var summation = function (num) {
        let tot= []
        for (let i=1;i<=num;i++){
          tot.push(i)
        }
          return tot.reduce((a,b)=> a+b)
          // Code here
        }