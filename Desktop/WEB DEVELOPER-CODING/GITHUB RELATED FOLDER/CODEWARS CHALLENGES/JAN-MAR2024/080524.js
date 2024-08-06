 
    // CHALLENGE NAME-  (7 kyu) Clothes size number converter

    // DESCRIPTION:

// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size.

// Notice that there is arbitrary amount of modifiers (x), excluding m size, 
// and input can be any string.

// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)

// The scale is linear; modifier x continues that by adding or subtracting 
// 2 from resulting size.

// (For sizes where x modifier makes total size negative, treat that as OK, 
//     and return negative size)

// Invalid cases
// Function should handle wrong/invalid sizes.

// Valid input has any base size (s/m/l) and any amount of modifiers (x) 
// before base size (like xxl).
// Notice that you cannot apply modifier for m size, consider that case
//  as invalid!
// Anything else is disallowed and should be considered as invalid (None
//      for Python, 0, false for Go, null for JavaScript).

// Invalid examples: xxx, sss, xm, other string

// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42

//     // ***STARTER CODE***

//     function sizeToNumber(size) {
//         return 0 ?? null ;
//       }    

//     //   ******TEST CASES*****
    
//     const {assert} = require("chai");

//     describe("Clothes size number converter", function() {
//       it("Basic tests", function() {
//         assert.strictEqual(sizeToNumber("s"), 36, "Small size");
//         assert.strictEqual(sizeToNumber("m"), 38, "Medium size");
//         assert.strictEqual(sizeToNumber("l"), 40, "Large size");
//         assert.strictEqual(sizeToNumber("xl"), 42, "Extra large");
//         assert.strictEqual(sizeToNumber("xs"), 34, "Extra small")
//       });
//       it("Extra modifier tests", function() {
//         assert.strictEqual(sizeToNumber("xxxs"), 30, "3-extra small");
//         assert.strictEqual(sizeToNumber("xxxl"), 46, "3-extra large");
//       });
//       it("Invalid/wrong sizes/input", function() {
//         assert.isNull(sizeToNumber(""), "Blank string is invalid");
//         assert.isNull(sizeToNumber("xm"), "Cannot apply modifier for medium size (xm)");
//         assert.isNull(sizeToNumber("xxxm"), "Cannot apply modifier for medium size (xxxm)");
//         assert.isNull(sizeToNumber("xxxx"), "No base size provided (xxxx)");
//         assert.isNull(sizeToNumber("ssss"), "Only one base size is allowed ('ssss')");
//         assert.isNull(sizeToNumber("hello world"), "Any other text is invalid ('hello world')");
//         assert.isNull(sizeToNumber("sm"), "Cannot have two bases ('sm')");
//         assert.isNull(sizeToNumber("ml"), "Cannot have two bases ('ml')");
//         assert.isNull(sizeToNumber("lm"), "Cannot have two bases ('lm')");
//       });
//     });

    // ******MY ANSWER********

    function sizeToNumber(size) {
        let s=36
        let m=38
        let l=40
        let x=2
        if (size.includes('s')&&size.includes('x')) {
            return s-x
         }
        else if (size.includes('l')&&size.includes('x')) {
            return l+x
         }
          else if (size==='s'){
            return s
         }
          else if (size==='m'){
            return m
         }
        else if (size==='l'){
            return l
         }
          return null 
        }

        // ****answer above is incomplete***