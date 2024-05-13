// CHALLENGE NAME-  Even or Odd   (#2)

// DESCRIPTION:

// Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.

// // ***STARTER CODE***

// function evenOrOdd(number) {
  
// }

// //   ******TEST CASES*****

// const chai = require('chai');
// const assert = chai.assert;

// describe("Sample tests",() => {
  
//   it("2 is even", () => {
//     assert.strictEqual(evenOrOdd(2), "Even");
//   });
//   it("7 is odd", () => {
//     assert.strictEqual(evenOrOdd(7), "Odd");
//   });
//   it("-42 is even", () => {
//     assert.strictEqual(evenOrOdd(-42), "Even");
//   });
//   it("-7 is odd", () => {
//     assert.strictEqual(evenOrOdd(-7), "Odd");
//   });
//   it("0 is even", () => {
//     assert.strictEqual(evenOrOdd(0), "Even");
//   });
// });


// ******MY ANSWER********

function evenOrOdd(num) {
    if (num%2===0) {
       return "Even"
    } 
    return "Odd"
   }