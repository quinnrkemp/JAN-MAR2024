    // CHALLENGE NAME-  Pillars

    // DESCRIPTION:

    // There are pillars near the road. The distance between the 
    // pillars is the same and the width of the pillars is the same. 
    // Your function accepts three arguments:

    // number of pillars (≥ 1);
    // distance between pillars (10 - 30 meters);
    // width of the pillar (10 - 50 centimeters).
    // Calculate the distance between the first and the last pillar 
    // in centimeters (without the width of the first and last pillar).

    // // ***STARTER CODE***

    // function pillars(numPill, dist, width) {
    //     // your code here
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", function(){
    //   it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
    //     assert.strictEqual(pillars(1, 10, 10) , 0);
    //   });  
    //   it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function(){
    //     assert.strictEqual(pillars(2, 20, 25) , 2000);
    //   });
    //   it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function(){
    //     assert.strictEqual(pillars(11, 15, 30) , 15270);
    //   });
    // });

    // ******MY ANSWER********

    function pillars(num, d, w) {
        return num<2?0:num<3?d*100:(num-1)*(d*100)+((num-2)*w)
          // your code here
        }
