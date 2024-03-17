// CHALLENGE NAME-  Geometry Basics: Distance between points in 2D   (#2)

// DESCRIPTION:

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.

// // ***STARTER CODE***

// function distanceBetweenPoints(a, b) {
//     return 0; // your code here
//   } 

// //   ******TEST CASES*****

// it("should pass these sample tests", function(){
//     doTest(new Point(    3,    3), new Point(  3,    3),         0);
//     doTest(new Point(    1,    6), new Point(  4,    2),         5);
//     doTest(new Point(-10.2, 12.5), new Point(0.3, 14.7), 10.728001);
//   });
  
//   function doTest(a, b, expected) {
//     const actual = distanceBetweenPoints(a, b);
//     assert.approximately(actual, expected, 1e-6, `Incorrect answer for:\n  a=new Point(${a.x}, ${a.y})\n  b=new Point(${b.x}, ${b.y})\n`);
//   }
// }); 

// ******MY ANSWER********

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  //   ****I didnt understand the way the question was asked.  this answer is from the solutions***