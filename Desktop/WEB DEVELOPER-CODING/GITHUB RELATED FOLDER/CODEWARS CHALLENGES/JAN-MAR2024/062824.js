// CHALLENGE NAME-  Arguments to Binary addition

// DESCRIPTION:

// Given an array add all the number elements and return 
// the binary equivalent of that sum; to make the code 
// bullet proof anything else than a number should be 
// added as 0 since it can't be addeded.

// If your language can handle float binaries assume the 
// array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, 
// binary and n-ary base

// // ***STARTER CODE***

// function arr2bin(arr){
//     // show me the code
//   } 

// //   ******TEST CASES*****

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(arr2bin([1,2]), "11")
//   Test.assertEquals(arr2bin([1,2,3,4,5]), "1111")
//   Test.assertEquals(arr2bin([1,10,100,1000]), "10001010111")
//   Test.assertEquals(arr2bin([null]), "0")
//   Test.assertEquals(arr2bin([true,true,false,15]),"1111")
//     });
//   });

// ******MY ANSWER********

function arr2bin(arr){
    let a= arr.reduce((a,b)=>a+b)
    return a.toString(a)
        // show me the code
      } 

    //   ***answer is not correct