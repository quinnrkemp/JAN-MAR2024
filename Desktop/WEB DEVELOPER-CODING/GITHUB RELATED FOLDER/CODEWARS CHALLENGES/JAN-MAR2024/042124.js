// CHALLENGE NAME- Grasshopper - Super Duper Easy   (#2)

// Make a function that returns the value multiplied by 50 and 
// increased by 6. If the value entered is a string it should 
// return "Error".

// ***THE PROBLEM***

// function problem(x){
//     //your code here
//   }

//   ******TEST CASES*****

//   const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(problem("hello"), "Error");
//     assert.strictEqual(problem(1), 56);
//     assert.strictEqual(problem(5), 256);
//     assert.strictEqual(problem(0), 6);
//     assert.strictEqual(problem(1.2), 66);
//     assert.strictEqual(problem(3), 156);
//     assert.strictEqual(problem("RyanIsCool"), "Error");
//     assert.strictEqual(problem(-3), -144);
//     assert.strictEqual(problem(""), "Error");
//     assert.strictEqual(problem(0.03), 7.5);
//   })
// })

// ******MY ANSWER********

function problem(x){
    if(typeof x==='string'){
    return 'Error';
    }
      //your code here
      return x*50+6;
    }