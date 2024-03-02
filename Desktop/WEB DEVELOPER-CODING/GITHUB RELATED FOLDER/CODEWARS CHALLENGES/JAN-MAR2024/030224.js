    // CHALLENGE NAME-  Collinearity

    // DESCRIPTION:

//     Write the function collinearity(x1, y1, x2, y2), which returns a Boolean 
//     type depending on whether the vectors are collinear or not.

//     all coordinates are integers
//     -1000 <= any coordinate <= 1000
//     Notes
//     All vectors start from the origin (x=0, y=0).
//     Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid 
//     division by zero errors.
//     A vector with coordinates (0, 0) is collinear to all vectors.
    
//     Examples
//     (1,1,1,1) ➞ true
//     (1,2,2,4) ➞ true
//     (1,1,6,1) ➞ false
//     (1,2,-1,-2) ➞ true
//     (1,2,1,-2) ➞ false
//     (4,0,11,0) ➞ true
//     (0,1,6,0) ➞ false
//     (4,4,0,4) ➞ false
//     (0,0,0,0) ➞ true
//     (0,0,1,0) ➞ true
//     (5,7,0,0) ➞ true

//     // ***STARTER CODE***

// function collinearity( x1,y1, x2,y2 ) {
//   return true || false ;
// }    

//     //   ******TEST CASES*****
    
//     const {assert} = require("chai");

//     describe("Example tests", function() {
//       it("collinear vectors", function() {
//         assert.strictEqual( collinearity( 1,1, 1,1 ), true, `collinearity( 1,1, 1,1 )` );
//         assert.strictEqual( collinearity( 1,2, 2,4 ), true, `collinearity( 1,2, 2,4 )` );
//         assert.strictEqual( collinearity( 1,2, -1,-2 ), true, `collinearity( 1,2, -1,-2 )` );
//       });
//       it("non-collinear vectors", function() {
//         assert.strictEqual( collinearity( 1,1, 6,1 ), false, `collinearity( 1,1, 6,1 )` );
//         assert.strictEqual( collinearity( 1,2, 1,-2 ), false, `collinearity( 1,2, 1,-2 )` );
//       });
//       it("vectors containing zero", function() {
//         assert.strictEqual( collinearity( 4,0, 11,0 ), true, `collinearity( 4,0, 11,0 )` );
//         assert.strictEqual( collinearity( 0,1, 6,0 ), false, `collinearity( 0,1, 6,0 )` );
//         assert.strictEqual( collinearity( 4,4, 0,4 ), false, `collinearity( 4,4, 0,4 )` );
//       });
//       it("zero vectors", function() {
//         assert.strictEqual( collinearity( 0,0, 0,0 ), true, `collinearity( 0,0, 0,0 )` );
//         assert.strictEqual( collinearity( 0,0, 1,0 ), true, `collinearity( 0,0, 1,0 )` );
//         assert.strictEqual( collinearity( 5,7, 0,0 ), true, `collinearity( 5,7, 0,0 )` );
//       });
//     });

    // ******MY ANSWER********

    function collinearity( x1,y1, x2,y2 ) {
  
  
        return x1*y2===y1*x2
      }