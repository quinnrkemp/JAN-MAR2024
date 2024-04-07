// CHALLENGE NAME-  Is it even   (#2)

// DESCRIPTION:

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// // ***STARTER CODE***

// function testEven(n) {
//     //Your awesome code here!
// }
// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("visible_tests", () => {
//     assert.strictEqual(testEven(0), true, "testEven for 0");
//     assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
//     assert.strictEqual(testEven(1), false, "testEven for 1");
//     assert.strictEqual(testEven(2), true, "testEven for 2");
//     assert.strictEqual(testEven(-4), true, "testEven for 2");
//   });
// });

// ******MY ANSWER********

function testEven(n) {
    if (Math.abs(n)<0 || n%2!==0) {
        return false
    }
    else {
        return true
    }
        //Your awesome code here!
    }