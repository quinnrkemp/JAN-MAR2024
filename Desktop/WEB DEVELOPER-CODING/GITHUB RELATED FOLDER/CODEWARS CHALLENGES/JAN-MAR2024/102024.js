    // CHALLENGE NAME-  I love you, a little , a lot, passionately ... not at all

    // DESCRIPTION:

    // Who remembers back to their time in the schoolyard, when 
    // girls would take a flower and tear its petals, saying each 
    // of the following phrases each time a petal was torn:

    // "I love you"
    // "a little"
    // "a lot"
    // "passionately"
    // "madly"
    // "not at all"
    // If there are more than 6 petals, you start over with 
    // "I love you" for 7 petals, "a little" for 8 petals and so on.
    
    // When the last petal was torn there were cries of excitement, 
    // dreams, surging thoughts and emotions.
    
    // Your goal in this kata is to determine which phrase the girls 
    // would say at the last petal for a flower of a given number of 
    // petals. The number of petals is always greater than 0.

    // // ***STARTER CODE***

    // function howMuchILoveYou(nbPetals) {
    //     // your code
    // }
     

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("howMuchILoveYou",function() {
    //   it("Basic tests",function() { 
    //     assert.strictEqual(howMuchILoveYou(7),"I love you")
    //     assert.strictEqual(howMuchILoveYou(3),"a lot")
    //     assert.strictEqual(howMuchILoveYou(6),"not at all")
    //   });
    // })
    
    // ******MY ANSWER********

    function howMuchILoveYou(nb) {
        // your code
           
       return nb == 1 ? "I love you" : nb == 2 ? "a little" : nb == 3 ? "a lot" : nb == 4 ? "passionately" : nb == 5? "madly" : nb == 6 ? "not at all" :  howMuchILoveYou(nb-6) ;
        
       }

    //  ***answer from the solutions***not sure why the last portion of the 
    //  answer wouldnt be 'nb%6' vs 'nb-6'***
    