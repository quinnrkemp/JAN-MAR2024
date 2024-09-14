 // CHALLENGE NAME-  Removing Elements

    // DESCRIPTION:

    // Take an array and remove every second element 
    // from the array. Always keep the first element 
    // and start removing with the next element.

    // Example:
    // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> 
    // ["Keep", "Keep", "Keep", ...]
    
    // None of the arrays will be empty, so you don't 
    // have to worry about that!

    // // ***STARTER CODE***

    // function removeEveryOther(arr){
    //     //your code here
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests",() =>{
    //   it("Testing for fixed tests", () => {
    //     assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    //     assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    //     assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    //     assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
    //   })
    // });
    
    // ******MY ANSWER********

    function removeEveryOther(arr){
        let arr2=[]
          for (let i=0; i<arr.length; i+=2) {
          arr2.push(arr[i])
        }
          return arr2
          //your code here
        }