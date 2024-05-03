// CHALLENGE NAME- Beginner Series #2 Clock   (#2)

// DESCRIPTION:

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// // ***STARTER CODE***

// function past(h, m, s){
//     //#Happy Coding! ^_^
//   } 

// //   ******TEST CASES*****

// const { assert } = require('chai');

// describe("Fixed Tests", () => {
//   it("Tests", () => {
//     assert.strictEqual(past(0,1,1),61000)
//     assert.strictEqual(past(1,1,1),3661000)
//     assert.strictEqual(past(0,0,0),0)
//     assert.strictEqual(past(1,0,1),3601000)
//     assert.strictEqual(past(1,0,0),3600000)
//   });
// }); 


// ******MY ANSWER********

function past(h, m, s){
    //#Happy Coding! ^_^
    let hour= h*3600000
    let minute= m*60000
    let second= s*1000
    return hour+minute+second
  }