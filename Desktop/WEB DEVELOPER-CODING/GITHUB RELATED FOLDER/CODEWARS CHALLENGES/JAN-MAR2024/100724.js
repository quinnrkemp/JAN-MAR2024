// CHALLENGE NAME-  Switch it UP!  (practice)

// DESCRIPTION:

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// // ***STARTER CODE***

// function switchItUp(number){
//     //Write your own Code!
//     }

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(switchItUp(1),"One");
//     assert.strictEqual(switchItUp(3),"Three");
//     assert.strictEqual(switchItUp(5),"Five");
//   });
// });

// ******MY ANSWER********

function switchItUp(num){
    return num===1?"One":num===2?"Two":num===3?"Three":num===4?"Four":num===5?"Five":num===6?"Six":num===7?"Seven":num===8?"Eight":num===9?"Nine":"Zero"
        //Write your own Code!
        }