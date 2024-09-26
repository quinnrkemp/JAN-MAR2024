 // CHALLENGE NAME-  Pick a set of first elements

    // DESCRIPTION:

    // Write a function to get the first element(s) of a 
    // sequence. Passing a parameter n (default=1) will 
    // return the first n element(s) of the sequence.

    // If n == 0 return an empty sequence []
    
    // Examples
    // var arr = ['a', 'b', 'c', 'd', 'e'];
    // first(arr) //=> ['a'];
    // first(arr, 2) //=> ['a', 'b']
    // first(arr, 3) //=> ['a', 'b', 'c'];
    // first(arr, 0) //=> [];

    // // ***STARTER CODE***

    // function first(arr, n) {
    //     // return arr;
    //   }  

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe("Tests", () => {
    //   it("test", () => {
    //     const arr = ['a', 'b', 'c', 'd', 'e'];
    //     assert.sameOrderedMembers(first([...arr]   ),      ['a']);
    //     assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);
    //   });
    // });

    // ******MY ANSWER********

    function first(arr, n = 1) {
        return arr.filter((_, i) => i < n);
      }

    // ***not my answer***