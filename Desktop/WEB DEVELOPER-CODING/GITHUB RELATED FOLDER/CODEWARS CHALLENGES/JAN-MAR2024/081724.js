 // CHALLENGE NAME-  Neutralisation

    // DESCRIPTION:

//     Given two strings comprised of + and -, return a new 
//     string which shows how the two strings interact in the 
//     following way:

//     When positives and positives interact, they remain positive.
//     When negatives and negatives interact, they remain negative.
//     But when negatives and positives interact, they become neutral, 
//     and are shown as the number 0.
    
//     Worked Example

//     ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

// Examples

// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"

//     // ***STARTER CODE***

//     function neutralise(s1, s2) {
//         // Here be dragons!
//         return "";
//       }  

//     //   ******TEST CASES*****
    
//     const chai = require("chai");
//     const assert = chai.assert;
    
//     describe("Fixed Tests", function() {
//       it("Basic Test Cases", function() {
//         assert.strictEqual(neutralise("--++--", "++--++"), "000000");
//         assert.strictEqual(neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
//         assert.strictEqual(neutralise("-++-", "-+-+"), "-+00");
//         assert.strictEqual(neutralise("--++", "++++"), "00++");
//         assert.strictEqual(neutralise("+++--+---", "++----++-"), "++0--000-");
//         assert.strictEqual(neutralise("-----", "-----"), "-----");
//         assert.strictEqual(neutralise("-+", "++"), "0+");
//         assert.strictEqual(neutralise("--", "-+"), "-0");
//         assert.strictEqual(neutralise("-++", "+--"), "000");
//         assert.strictEqual(neutralise("++-++--++-", "-+++-++-++"), "0+0+0000+0");
//         assert.strictEqual(neutralise("-++-+-++-", "+-++++---"), "00+0+000-");
//         assert.strictEqual(neutralise("---++-+--", "-+++--++-"), "-00+0-+0-");
//         assert.strictEqual(neutralise("+-----+++-", "--+-+-++--"), "0-0-0-++0-");
//         assert.strictEqual(neutralise("+-----+-", "---++-++"), "0--00-+0");
//         assert.strictEqual(neutralise("-+--+-+---", "-+--+-+-+-"), "-+--+-+-0-");
//         assert.strictEqual(neutralise("+-+", "-++"), "00+");
//         assert.strictEqual(neutralise("-++", "-+-"), "-+0");
//         assert.strictEqual(neutralise("---+", "-+++"), "-00+");
//         assert.strictEqual(neutralise("+--", "+--"), "+--");
//         assert.strictEqual(neutralise("--+++-+-", "+++++---"), "00+++-0-");
//       });
//     });
   
    // ******MY ANSWER********

    function neutralise(s1, s2) {
        let res = "";
        for(let i = 0; i < s1.length; i++) {
          res += s1[i] !== s2[i]? "0": s1[i];
        }
        return res;
      }