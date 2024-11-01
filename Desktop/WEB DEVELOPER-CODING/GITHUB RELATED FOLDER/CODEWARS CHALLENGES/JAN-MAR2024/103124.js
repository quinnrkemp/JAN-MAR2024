    // CHALLENGE NAME-  If you can't sleep, just count sheep!!

    // DESCRIPTION:

    // If you can't sleep, just count sheeps!!

    // Task:
    // Given a non-negative integer, 3 for example, return 
    // a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
    // Input will always be valid, i.e. no negative integers.

    // // ***STARTER CODE***

    // var countSheep = function (num){
    // }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Fixed tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(countSheep(0), "");
    //     assert.strictEqual(countSheep(1), "1 sheep...");
    //     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    //     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
    //   });
    // });

    // ******MY ANSWER********

//     var countSheep = function (num){
//     }
// ********************************
//     function countSheep(num){
//         for (let i=0; i<=num; i++) {
//          if (i===0) {
//            return ``
//          }
//           return `${i} sheep...`
//         }
//          //your code here
//        }

//        *******************

//        var countSheep = function (num){
//         let str = "";
//         for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//         return str;
//       }

//       *********************

      function countSheep(num){
        let zero= ''
          for (let i=1; i<=num; i++) {
           zero+=`${i} sheep...`
         }
          return zero
          //your code here
        }