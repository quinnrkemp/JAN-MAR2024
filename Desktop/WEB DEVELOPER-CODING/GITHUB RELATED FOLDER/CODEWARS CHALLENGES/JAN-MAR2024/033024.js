// CHALLENGE NAME-  Find the Integral  (#2)

// DESCRIPTION:

// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"

// // ***STARTER CODE***

// function integrate(coefficient, exponent) {
  
// }

// //   ******TEST CASES*****

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(integrate(3,2), "1x^3");
//   Test.assertEquals(integrate(12,5), "2x^6");
//   Test.assertEquals(integrate(20,1), "10x^2")
//   Test.assertEquals(integrate(40,3), "10x^4")
//   Test.assertEquals(integrate(90,2), "30x^3")
//     });
//   });
  
// ******MY ANSWER********

let add1= b+1
let add2= a/add1
return `${add2}x^${add1}`