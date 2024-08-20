 // CHALLENGE NAME-  Find numbers which are divisible by given number

    // DESCRIPTION:

    // Complete the function which takes two arguments and returns all 
    // numbers which are divisible by the given divisor. First argument 
    // is an array of numbers and the second is the divisor.

    // Example(Input1, Input2 --> Output)
    // [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

    // // ***STARTER CODE***

    // function divisibleBy(numbers, divisor){

    // }  

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Sample tests", function() {
    //   it("should pass sample tests", function() {
    //     Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    //     Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    //     Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    //     Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    //     Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
    //   })  
    // })    

    // ******MY ANSWER********

    function divisibleBy(nums, div){
        const result = nums.filter((nums) => nums % div===0)
        return result
          
          // const map1 = nums.map((x) => x % div===0)
        // return nums===true
        }