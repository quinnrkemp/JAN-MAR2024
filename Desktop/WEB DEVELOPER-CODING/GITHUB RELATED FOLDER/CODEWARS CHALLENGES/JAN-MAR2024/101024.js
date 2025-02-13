    // CHALLENGE NAME-  Grasshopper- Array Mean

    // DESCRIPTION:

    // Find Mean
    // Find the mean (average) of a list of numbers 
    // in an array.
    
    // Information
    // To find the mean (average) of a set of numbers 
    // add all of the numbers together and divide by 
    // the number of values in the list.
    
    // For an example list of 1, 3, 5, 7
    
    // 1. Add all of the numbers
    
    // 1+3+5+7 = 16
    // 2. Divide by the number of values in the list. 
    // In this example there are 4 numbers in the list.
    
    // 16/4 = 4
    // 3. The mean (or average) of this list is 4

    // // ***STARTER CODE***

    // var findAverage = function (nums) {
    //     // Code here
    //   } 

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe('get average', function () {
    //   it('should return the average', function () {
    //     Test.assertEquals(findAverage([1]), 1)
    //     Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
    //   })
    // })

    // ******MY ANSWER********

    var findAverage = function (nums) {
        let mean= nums.reduce((a,b)=> a+b)
          return mean/nums.length
        
          // Code here
        }