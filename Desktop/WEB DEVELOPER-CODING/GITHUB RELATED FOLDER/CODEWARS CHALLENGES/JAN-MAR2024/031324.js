// CHALLENGE NAME-  Exclamation marks series #1:       (#2)
// Remove an exclamation mark from the end of string

// DESCRIPTION:

// Remove an exclamation mark from the end of a string. For a beginner kata, 
// you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// // ***STARTER CODE***

// function remove (string) {
//     //coding and coding....
//     return '';
//   } 

// //   ******TEST CASES*****

// const strictEqual = require("chai").assert.strictEqual;

// function doTest(input, expected) {
// 	const actual = remove(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", function () {
// 	it("sample tests", function () {
// 		doTest("Hi!", "Hi");
// 		doTest("Hi!!!", "Hi!!");
// 		doTest("!Hi", "!Hi");
// 		doTest("!Hi!", "!Hi");
// 		doTest("Hi! Hi!", "Hi! Hi");
// 		doTest("Hi", "Hi");
// 	});
// });

// ******MY ANSWER********

function remove (string) {
    if (string.endsWith("!")){
      return string.substring(0,string.length-1)
    } 
    else {
      return string
    }
    //coding and coding....
  }
  
  // ***my first try below== this answer is correct... answer above is a little dryer***
  
  // function remove (string) {
  //   if (string.includes("!", string.length-1)){
  //     return string.substring(0,string.length-1)
  //   } 
  //   else {
  //     return string
  //   }
  //   //coding and coding....
  // }