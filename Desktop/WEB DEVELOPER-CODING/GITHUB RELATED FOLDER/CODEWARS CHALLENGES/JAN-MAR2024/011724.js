// CHALLENGE NAME-  Training JS #18: Methods of String 
// object--concat() split() and its good friend join()     (#2)

// DESCRIPTION:

// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split 
// each word into separate characters and join them back with the specified 
// separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

// // ***STARTER CODE***

// function splitAndMerge(string, separator) {
//     return
//   } 

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("Should pass sample tests", () => {
//     assert.strictEqual(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
//     assert.strictEqual(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
//     assert.strictEqual(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
//     assert.strictEqual(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
//   });
// });

// ******MY ANSWER********

function splitAndMerge(str, sp) {
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
  }