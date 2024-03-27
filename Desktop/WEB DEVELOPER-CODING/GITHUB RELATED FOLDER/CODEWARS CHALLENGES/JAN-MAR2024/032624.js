// CHALLENGE NAME-  Grasshopper - Messi goals function  (#2)

// DESCRIPTION:

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// // ***STARTER CODE***

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     // code goes here
//   }

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(goals(0,0,0), 0)
// Test.assertEquals(goals(43, 10, 5), 58)
//   });
// });
 
// ******MY ANSWER********

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals+ copaDelReyGoals+ championsLeagueGoals
  }