// CHALLENGE NAME-  For UFC Fans (Total Beginners): Conor 
// McGregor vs George Saint Pierre             (#2)

// DESCRIPTION:

// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre 
// in Madison Square Garden. Only one fighter will remain standing, and after 
// the fight in an interview with Joe Rogan the winner will make his legendary 
// statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!

// Note
// The given name may varies in casing, eg., it can be "George Saint Pierre" 
// or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing 
// (case-insensitive).

// // ***STARTER CODE***

// var quote = function(fighter) {
//     // your code here
//   };

// //   ******TEST CASES*****

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(quote('george saint pierre'), "I am not impressed by your performance.")
//   Test.assertEquals(quote('conor mcgregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
  
//   Test.assertEquals(quote('George Saint Pierre'), "I am not impressed by your performance.")
//   Test.assertEquals(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
//     });
//   });

// ******MY ANSWER********

var quote = function(fi) {
    let a= "I am not impressed by your performance."
    let b= "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    return fi.toLowerCase()==='george saint pierre'? a : b
        // your code here
      };