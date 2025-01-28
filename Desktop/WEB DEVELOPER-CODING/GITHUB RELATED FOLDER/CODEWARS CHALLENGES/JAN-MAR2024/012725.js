    // CHALLENGE NAME-  Length and two values

    // DESCRIPTION:

    // Given an integer n and two other values, build an array of 
    // size n filled with these two values alternating.

    // Examples
    // 5, true, false     -->  [true, false, true, false, true]
    // 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    // 0, "one", "two"    -->  []
    // Good luck!

    // // ***STARTER CODE***

    // function alternate(n, firstValue, secondValue){

    //     // your code
    //   }

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold = 0;
    
    // describe("Test", () => {
    //   it('small arrays', () => {
    //     assert.deepEqual(alternate(5, true, false), [true, false, true, false, true])
    //   });
      
    //   it('larger arrays', () => {
    //     assert.deepEqual(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
    //   });
      
    //   it('with 0', () => {
    //     assert.deepEqual(alternate(0, "lemons", "apples"), [])
    //   });
    // });

    // ******MY ANSWER********

    // function alternate(n, fir, sec){
    //     let arr= [fir, sec]
    //     for (let i=1; i<=n; i++) {
    //       console.log([arr[0],arr[1]])
    //     }
    //       // your code
    //     }

    // ***bad answer above***
    function alternate(n, firstValue, secondValue){
        let arr=[];
        for (let i=0;i<n;i++){
          if(i%2===0){
            arr.push(firstValue);
          } else  arr.push(secondValue);
        }
        return arr;
      }
