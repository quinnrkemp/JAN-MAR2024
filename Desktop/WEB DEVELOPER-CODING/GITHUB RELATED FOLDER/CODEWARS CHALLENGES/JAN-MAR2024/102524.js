    // CHALLENGE NAME-  Total amount of points   (additional practice)

    // DESCRIPTION:

    // Our football team has finished the championship.

    // Our team's match results are recorded in a collection 
    // of strings. Each match is represented by a string in 
    // the format "x:y", where x is our team's score and y is
    //  our opponents score.
    
    // For example: ["3:1", "2:2", "0:1", ...]
    
    // Points are awarded for each match as follows:
    
    // if x > y: 3 points (win)
    // if x < y: 0 points (loss)
    // if x = y: 1 point (tie)
    // We need to write a function that takes this collection 
    // and returns the number of points our team (x) got in 
    // the championship by the rules given above.
    
    // Notes:
    
    // our team always plays 10 matches in the championship
    // 0 <= x <= 4
    // 0 <= y <= 4

    // // ***STARTER CODE***

    // function points(games) {
    //     return 0
    //   } 

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Total amount of points", function(){
    //   it("Sample Tests", function(){
    //     assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    //     assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    //     assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    //     assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    //     assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
    //   });
    // });

    // ******MY ANSWER********

    function points(games) {
        return 0
      } 

    //   ***answer is below***

// function points(games) {

//     let zero= games[0].split('')
//     let one= games[1].split('')
//     let two= games[2].split('')
//     let three= games[3].split('')
//     let four= games[4].split('')
//     let five= games[5].split('')
//     let six= games[6].split('')
//     let sev= games[7].split('')
//     let eig= games[8].split('')
//     let nin= games[9].split('')
   
//     if ( Number(zero[0]) > Number(zero[2]) || Number(one[0]) > Number(one[2]) ||
//         Number(two[0]) > Number(two[2]) || Number(three[0]) > Number(three[2]) ||
//      Number(four[0]) > Number(four[2]) || Number(five[0]) > Number(five[2]) ||
//       Number(six[0]) > Number(six[2]) || Number(sev[0]) > Number(sev[2]) ||
//       Number(eig[0]) > Number(eig[2]) || Number(nin[0]) > Number(nin[2])) {
//       return 2
//     }
//   }