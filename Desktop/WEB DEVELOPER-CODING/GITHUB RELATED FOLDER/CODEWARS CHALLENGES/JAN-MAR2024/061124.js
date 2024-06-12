// CHALLENGE NAME-  Fuel Calculator: Total Cost

// DESCRIPTION:

// In this kata you will have to write a function that takes litres and 
// pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, 
// purchases of 4 or more litres get a discount of 10 cents per litre, 
// and so on every two litres, up to a maximum discount of 25 cents per 
// litre. But total discount per litre cannot be more than 25 cents. 
// Return the total cost rounded to 2 decimal places. Also you can guess 
// that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

// // ***STARTER CODE***

// function fuelPrice(litres, pricePerLitre) {
//     // your code here
//     // Good luck with it!
//   }

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(fuelPrice(5, 1.23), 5.65);
// Test.assertEquals(fuelPrice(8, 2.5), 18.40);
// Test.assertEquals(fuelPrice(5, 5.6), 27.50);
//   });
// });

// ******MY ANSWER********

function fuelPrice(l, pr) {
let l=l.toFixed(2)
let pr=pr.toFixed(2)
  return l>=10?l*pr-(l*.25):l>=8?l*pr-(l*.20):l>=6?l*pr-(l*.15):l>=4?l*pr-(l*.10):l>=2?l*pr-(l*.05):l*pr  // your code here
    // Good luck with it!
  }

//   function fuelPrice(l, pr) {

//     let res=(l*pr).toFixed(2)
//     return l>=10?res-(l*.25).toFixed(2):l>=8?res-(l*.20).toFixed(2):l>=6?res-(l*.15).toFixed(2):l>=4?res-(l*.10).toFixed(2):l>=2?res-(l*.05).toFixed(2):res.toFixed(2)  
    
// *****NONE OF THESE ANSWERS IS CORRECT****