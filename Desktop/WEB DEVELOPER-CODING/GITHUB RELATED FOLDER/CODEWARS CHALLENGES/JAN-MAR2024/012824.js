// CHALLENGE NAME-  Grasshopper - Terminal game combat function  (#2)

// DESCRIPTION:

// Create a combat function that takes the player's current health 
// and the amount of damage recieved, and returns the player's new 
// health. Health can't be less than 0.

// // ***STARTER CODE***

// function combat(health, damage) {
//     // Write your code here
//   }

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("The combat() function", function () {
//   it("should work for some example tests", function () {
//     Test.assertEquals(combat(100, 5), 95);
//     Test.assertEquals(combat(92, 8), 84);
//     Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
//   });
// }); 

// ******MY ANSWER********

function combat(health, damage) {
    if ((health-damage)<0) {
      return 0
    } 
     else {
       return health-damage
     }
     // Write your code here
   }