// CHALLENGE NAME-  Hex to Decimal   (#2)

// DESCRIPTION:

// Complete the function which converts hex number 
// (given as a string) to a decimal number.

// // ***STARTER CODE***

// function hexToDec(hexString){
//     //your code here
//   } 

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(hexToDec("1"), 1);
//     assert.strictEqual(hexToDec("a"), 10);
//     assert.strictEqual(hexToDec("10"), 16);
//     assert.strictEqual(hexToDec("FF"), 255);
//     assert.strictEqual(hexToDec("-C"), -12);
//   })
// })

// ******MY ANSWER********

function hexToDec(hex){
    return parseInt(hex,16)
     //your code here
   }