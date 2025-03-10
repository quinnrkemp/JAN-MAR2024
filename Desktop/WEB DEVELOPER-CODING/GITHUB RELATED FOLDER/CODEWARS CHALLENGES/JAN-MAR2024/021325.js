    // CHALLENGE NAME-  Find out whether the shape is a cube

    // DESCRIPTION:

    // To find the volume (centimeters cubed) of a cuboid you use the 
    // formula:

    // volume = Length * Width * Height
    
    // But someone forgot to use proper record keeping, so we only have 
    // the volume, and the length of a single side!
    
    // It's up to you to find out whether the cuboid has equal sides 
    // (= is a cube).
    
    // Return true if the cuboid could have equal sides, return false 
    // otherwise.
    
    // Return false for invalid numbers too (e.g volume or side is less 
    //     than or equal to 0).
    
    // Note: side will be an integer
    
    // // ***STARTER CODE***

    // function cubeChecker(volume, side){
    //     return false;
    //   };  

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe("Tests", () => {
    //   it("test", () => {
    //     assert.strictEqual(cubeChecker(  8, 3), false);
    //     assert.strictEqual(cubeChecker(  8, 2), true );
    //     assert.strictEqual(cubeChecker( -8,-2), false);
    //     assert.strictEqual(cubeChecker(  0, 0), false);
    //     assert.strictEqual(cubeChecker(  1, 5), false);
    //     assert.strictEqual(cubeChecker(125, 5), true );
    //   });
    // });

    // ******MY ANSWER********

    function cubeChecker(v, s){
        return s**3===v && s**3>0
     
      };
