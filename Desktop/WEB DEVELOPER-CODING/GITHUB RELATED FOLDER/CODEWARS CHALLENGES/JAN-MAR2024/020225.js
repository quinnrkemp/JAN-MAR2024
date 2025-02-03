    // CHALLENGE NAME-  Type of sum

    // DESCRIPTION:

// Return the type of the sum of the two arguments

//     // ***STARTER CODE***

//     function typeOfSum(a, b) {
//         // good luck
//       }

//     //   ******TEST CASES*****
    
//     const { assert } = require('chai');

//     describe("Basic tests", () => { 
      
//       function testIt(a, b, expected) {
//         it(`typeOfSum(${JSON.stringify(a)}, ${JSON.stringify(b)}) should be '${expected}'`, () => {
//           assert.strictEqual(typeOfSum(a, b), expected);
//         });
//       }
      
//       testIt(12,        1,         'number');
//       testIt('d',       1,         'string');
//       testIt(1,         'a',       'string');
//       testIt('dd',      '',        'string');
//       testIt(true,      1,         'number');
//       testIt('s',       false,     'string');
//       testIt(null,      1,         'number');
//       testIt('s',       null,      'string');
//       testIt(null,      undefined, 'number');
//       testIt(undefined, 're',      'string');
//       testIt(undefined, true,      'number');
//       testIt(null,      false,     'number');
//     });

    // ******MY ANSWER********

    function typeOfSum(a, b) {
        return typeof (a+b)
         // good luck
       }