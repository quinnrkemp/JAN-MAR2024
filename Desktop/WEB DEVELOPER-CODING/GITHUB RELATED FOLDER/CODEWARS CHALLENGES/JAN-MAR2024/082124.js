 // CHALLENGE NAME-  SpeedCode #2 - Array Madness

    // DESCRIPTION:

    // Given two integer arrays a, b, both of length >= 1, create 
    // a program that returns true if the sum of the squares of each 
    // element in a is strictly greater than the sum of the cubes of 
    // each element in b.

    // E.g.
    // arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 
    // 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

    // // ***STARTER CODE***

    // function arrayMadness(a, b) {
    //     // Ready, get set, GO!!!
    //    }   

    // //   ******TEST CASES*****
    
    // describe("arrayMadness", () => {
    //     it("should work for fixed tests", () => {
    //       Test.assertEquals(arrayMadness([4,5,6],[1,2,3]), true);
    //       Test.assertEquals(arrayMadness([5,6,7],[4,5,6]), false);
    //       Test.assertEquals(arrayMadness([4,5,6],[3,4,5]), false);
    //       Test.assertEquals(arrayMadness([3,4,5],[2,3,4]), false);
    //       Test.assertEquals(arrayMadness([2,3,4],[1,2,3]), false);
    //       Test.assertEquals(arrayMadness([1,2,3],[0,1,2]), true);
    //       Test.assertEquals(arrayMadness([5,3,2,4,1],[15]), false);
    //       Test.assertEquals(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
    //       Test.assertEquals(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
    //       Test.assertEquals(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
    //       Test.assertEquals(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
    //     });
    //   });

    // ******MY ANSWER********

    function arrayMadness(a, b) {
        let one=a.reduce ((acc,x)=>acc+(x**2),0) 
        let two=b.reduce ((acc,x)=>acc+(x**3),0)
        if (one>two) {
          return true
        }
          return false
          // Ready, get set, GO!!!
        }

    //  ***alt answer***
    //     const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 