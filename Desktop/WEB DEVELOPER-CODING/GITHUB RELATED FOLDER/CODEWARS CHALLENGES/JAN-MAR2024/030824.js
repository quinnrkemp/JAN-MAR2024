// CHALLENGE NAME-  Area of a Square  (#2)

// DESCRIPTION:

// Complete the function that calculates the area of the red square, 
// when the length of the circular arc A is given as the input. Return 
// the result rounded to two decimals.

// Graph

// Pic= square with an arc (A)

// Note: use the π value provided in your language (Math::PI, M_PI, math.
// pi, etc)

// // ***STARTER CODE***

// function squareArea(A){
  
// }

// //   ******TEST CASES*****

// describe("Example tests", () => {
  
//     it("squareArea(2)", function() {
//       assert.closeTo(squareArea(2), 1.62, 1e-2);
//     });
  
//     it("squareArea(0)", function() {
//       assert.closeTo(squareArea(0), 0, 1e-2);
//     });
  
//     it("squareArea(14.05)", function() {
//       assert.closeTo(squareArea(14.05), 80, 1e-2);
//     });  
//   }); 

// ******MY ANSWER********

function squareArea(A){
    // Calculate the circumference of A 
    const circumference = A * 4;
    
    // Calculate the radius of A
    const radius = circumference / (Math.PI * 2);
    
    // Calculate the area of the square, rounded to 2 decimal places
    const area = Number((radius**2).toFixed(2));
    
    // Return the result
    return area;
  }