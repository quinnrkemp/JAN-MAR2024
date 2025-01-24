    // CHALLENGE NAME-  Maid Ep2: Christmas Trash Party

    // DESCRIPTION:

    // His Royal Highness Prince of Edinburgh cares a lot about the ecology 
    // and propagates waste sorting. Once per year, He organizes the Christmas 
    // Trash Party, where His employees sort the garbage that the Prince has 
    // been thrown during the year. Obviously, you want to participate in this 
    // High day.

    // Task
    // You will receive trash1 and trash2, that might be the next values:
    
    // [], false, '', new Array(), null, NaN, undefined, 0, -0, 0n, -0n, '0'
    
    // You have to return a boolean if they are strictly equal.
    
    // However
    // The Prince says when He was young, there weren't softies who were afraid 
    // to get their hands dirty, so He doesn't let His employees use gloves for 
    // work (triple equals === and strict inequality !== are not allowed).

    // // ***STARTER CODE***

    // function compareTrash(trash1, trash2){
      
    //       // your code;
    //     }

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold = 0;
    
    // describe("Sample", function() {
    //   it("minion trash", function() {
    //      assert.deepEqual(compareTrash([], false), false);
    //      assert.deepEqual(compareTrash(0, false), false);
    //      assert.deepEqual(compareTrash([], 0), false);
    //      assert.deepEqual(compareTrash([], ''), false);
    //      assert.deepEqual(compareTrash('', new Array()), false);
    //      assert.deepEqual(compareTrash(null, null), true);
    //      assert.deepEqual(compareTrash(null, NaN), false);
    //      assert.deepEqual(compareTrash(false, false), true);
    //      assert.deepEqual(compareTrash(0, false), false);
    //      assert.deepEqual(compareTrash(null, undefined), false);
    //      assert.deepEqual(compareTrash(undefined, NaN), false);
    //      assert.deepEqual(compareTrash('', ''), true);
    //      assert.deepEqual(compareTrash(0, -0), true);
    //      assert.deepEqual(compareTrash('0', 0), false);
    //   });
    //   it("boss trash", function() {
    //      assert.deepEqual(compareTrash([], []), false);
    //      assert.deepEqual(compareTrash(NaN, NaN), false);
    //      assert.deepEqual(compareTrash(undefined, undefined), true);
    //      assert.deepEqual(compareTrash(0n, 0n), true);
    //      assert.deepEqual(compareTrash(-0, 0n), false);
    //   });
    // });

    // ******MY ANSWER********

    function compareTrash(trash1, trash2){
        return (trash1 == trash2) && (typeof trash1 == typeof trash2)
      }