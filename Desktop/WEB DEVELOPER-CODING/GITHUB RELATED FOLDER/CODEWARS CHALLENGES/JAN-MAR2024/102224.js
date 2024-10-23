// CHALLENGE NAME-  ASCII Total (#3)

// DESCRIPTION:

// You'll be given a string, and have to return 
// the sum of all characters as an int. The function 
// should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// // ***STARTER CODE***

// function uniTotal (string) {
 // total up dem unicodes!
//     }

// //   ******TEST CASES*****

// const strictEqual = require('chai').assert.strictEqual;

// function doTest (string, expected) {
//   const actual = uniTotal(string);
//   strictEqual(actual, expected, `for string "${string}":\n`);
// }

// it("sample tests", () => {
//   doTest("", 0);
//   doTest("a", 97);
//   doTest("b", 98);
//   doTest("c", 99);
//   doTest("d", 100);
//   doTest("e", 101);
//   doTest("aaa", 291);
//   doTest("Mary Had A Little Lamb", 1873);
// });

// ******MY ANSWER********

function uniTotal(a)
{
  return a.split('').reduce((s,c) => s+c.charCodeAt(),0)
}