// CHALLENGE NAME-  Grasshopper - Terminal game move function  (#2)

// DESCRIPTION:

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice 
// and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of 
// the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// // ***STARTER CODE***

// function move (position, roll) {
//     // return the new position
//   } 

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe('move function', () => {
//   it('basic tests', () => {
//     Test.assertEquals(move(0, 4), 8);
//     Test.assertEquals(move(3, 6), 15);
//     Test.assertEquals(move(2, 5), 12);
//   })
// }) 

// ******MY ANSWER********

function move (p, r) {
return p+ (r*2)
    // return the new position
  } 