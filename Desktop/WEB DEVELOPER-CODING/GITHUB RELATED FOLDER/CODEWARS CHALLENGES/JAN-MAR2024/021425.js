    // CHALLENGE NAME-  Find Multiples of a Number

    // DESCRIPTION:

    // In this simple exercise, you will build a program that takes 
    // a value, integer , and returns a list of its multiples up to 
    // another value, limit . If limit is a multiple of integer, it 
    // should be included as well. There will only ever be positive 
    // integers passed into the function, not consisting of 0. The 
    // limit will always be higher than the base.

    // For example, if the parameters passed are (2, 6), the function 
    // should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 
    // up to 6.

    // // ***STARTER CODE***

    // function findMultiples(integer, limit) {
    //     //your code here
    //   } 

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');
    // it("Basic Tests",() =>{
    //   assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
    //   assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
    //   assert.sameOrderedMembers(findMultiples(5, 7), [5])
    //   assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    //   assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
    // });

    // ******MY ANSWER********

    function findMultiples(int, lim) {
        let arr= []
        for (let i=int; i<=lim; i++) {
          if (i%int===0){
             arr.push(i)
        }
          }
          return arr
          //your code here
        }