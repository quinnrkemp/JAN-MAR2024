//  *****practice from yesterday's problem*****
 
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
for (let i=0; i<=arr[arr.length-1]; i+=2) {
    arr2.push(arr[i])
}
console.log(arr2)
        //your code here
      }  

      removeEveryOther([10,2,23,4,5])