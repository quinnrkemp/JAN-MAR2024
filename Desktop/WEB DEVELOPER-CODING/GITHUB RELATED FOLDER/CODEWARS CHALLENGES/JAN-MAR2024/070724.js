// CHALLENGE NAME-  Find the Position

// DESCRIPTION:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// // ***STARTER CODE***

// function position(letter){
//     //Write your own Code!
//     }

// //   ******TEST CASES*****

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(position("a"),"Position of alphabet: 1");
//   Test.assertEquals(position("z"),"Position of alphabet: 26");
//   Test.assertEquals(position("e"),"Position of alphabet: 5");
//     });
//   }); 

// ******MY ANSWER********

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let pos = alphabet.indexOf(letter)+1;
  
    return `Position of alphabet: ${pos}`
  }

//   with help from the solutions