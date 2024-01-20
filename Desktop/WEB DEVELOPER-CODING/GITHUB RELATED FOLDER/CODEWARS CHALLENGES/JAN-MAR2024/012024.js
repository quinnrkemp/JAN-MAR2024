    // // CHALLENGE NAME-  Simple validation of a username with regex

    // // DESCRIPTION:

    // Write a simple regex to validate a username. Allowed characters are:

    // lowercase letters,
    // numbers,
    // underscore
    // Length should be between 4 and 16 characters (both included).

    // // ***STARTER CODE***

    // function validateUsr(username) {
    //     const res =  //regex here/.test(username)
    //     return res;
    //   }    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(validateUsr('asddsa'), true);
    //     assert.strictEqual(validateUsr('a'), false);
    //     assert.strictEqual(validateUsr('Hass'), false);
    //     assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
    //     assert.strictEqual(validateUsr(''), false);
    //     assert.strictEqual(validateUsr('____'), true);
    //     assert.strictEqual(validateUsr('012'), false);
    //     assert.strictEqual(validateUsr('0123'), true);
    //     assert.strictEqual(validateUsr('1234567890abcdefg'), false);
    //     assert.strictEqual(validateUsr('p1pp1'), true);
    //     assert.strictEqual(validateUsr('asd43 34'), false);
    //     assert.strictEqual(validateUsr('asd43_34'), true);
    //     assert.strictEqual(validateUsr('abcd'), true);
    //   });
    // });

    // ******MY ANSWER********

    const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);