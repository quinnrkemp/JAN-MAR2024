 // CHALLENGE NAME-  Well of Ideas- Easy Version

    // DESCRIPTION:

    // For every good kata idea there seem to be quite a few bad ones!

    // In this kata you need to check the provided array (x) for good 
    // ideas 'good' and bad ideas 'bad'. If there are one or two good 
    // ideas, return 'Publish!', if there are more than 2 return 'I
    //  smell a series!'. If there are no good ideas, as is often the case, 
    //  return 'Fail!'.

    // // ***STARTER CODE***

    // function well(x){

    //     if (x.find(good)<1) {
    //       return 'Fail!'
    //     }
    //     else if (x.find(good)<=2) {
    //       return 'Publish!
    //     }
    //     else {
    //       return 'I smell a series'
    //     }
    //     }    

    //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    //     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    //     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
    //   });
    // });

    // ******MY ANSWER********

    function well(x){
        let y = x.filter(el => el == 'good').length;
        if ( y > 0 && y < 3){
        return 'Publish!';
        } else if (y > 2){
        return 'I smell a series!';
        }else {return 'Fail!';}
        };