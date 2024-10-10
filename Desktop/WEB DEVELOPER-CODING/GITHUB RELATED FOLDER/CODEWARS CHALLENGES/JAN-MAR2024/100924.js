// CHALLENGE NAME-  String repeat  (practice attempt)

// DESCRIPTION:

// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// // ***STARTER CODE***

// function repeatStr (n, s) {
//     return '';
//   } 

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", function() {
//   it ("Basic tests", function() {
//     assert.strictEqual(repeatStr(3, "*"), "***");
//     assert.strictEqual(repeatStr(5, "#"), "#####");
//     assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//   });
// });
 
// ******MY ANSWER********

function repeatStr(num, str) {
    // let res = '';
    // for (let i = 1; i <= num; i++) {
    //   res = res + str;
    //  }
    // return res;
    console.log (num*str)
  }
  repeatStr(3,'u')   

//   practice attempt, didnt work