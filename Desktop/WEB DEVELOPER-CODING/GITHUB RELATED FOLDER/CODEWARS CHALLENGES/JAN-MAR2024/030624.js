// CHALLENGE NAME-  Training JS #34: methods of Math      (#2)
// ---pow() sqrt() and cbrt()

// DESCRIPTION:

// In this lesson we learn three methods of Math: pow() sqrt() and cbrt(). Their 
// usage is very simple: sqrt() returns the square root of a number; cbrt() returns 
// the cube root of a number; pow() returns the base to the exponent power.

// Their definitions and detailed information:

// Math.pow()
// Math.sqrt()
// Math.cbrt()
// Here we use some examples to understand their usage:

// var arr1=[1,4,9];
// var sqroot=arr1.map(Math.sqrt);
// console.log(sqroot);            //output: [1,2,3]

// var arr2=[1,8,27];
// var cbroot=arr2.map(Math.cbrt);
// console.log(cbroot);            //output: [1,2,3]

// var arr3=[1,2,3];
// var pow2=arr3.map(x=>Math.pow(x,2));
// var pow3=arr3.map(x=>Math.pow(x,3));
// console.log(pow2);                  //output: [1,4,9]
// console.log(pow3);                  //output: [1,8,27]

// Task
// Coding in function cutCube. function accept 2 parameter: volume and n. volume
//  is the volume of a cube. If we cut the cube into n block. please determine 
//  whether the length of the cube is an integer. return true or false.

// For exmaple:

// volume=27, it can be divided into 27 blocks, each small cube side length is 1

// cutCube(27,27) should return true
// volume=512, it can be divided into 8 blocks, each small cube side length is 4

// cutCube(512,8) should return true
// volume=512, it can be divided into 64 blocks, each small cube side length is 2

// cutCube(512,64) should return true
// If the side length of small cube is not a integer, should return false.

// cutCube(256,8) should return false
// cutCube(27,3) should return false
// cutCube(123,456) should return false
// If it can't be divided evenly into n small cubes, should return false too.

// cutCube(50000,50) should return false
// cutCube(256,4) should return false
// The two examples above seems to meet our requirements, but please note: a 
// cube is unable to evenly divided into 50 pieces or 4 pieces. Only cubic 
// numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.

// // ***STARTER CODE***

// function cutCube(volume,n){
//     //coding here...
    
//   }

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){ 
// it("It should works for basic tests.", function(){

//     Test.assertEquals(cutCube(27,27)    , true);
//     Test.assertEquals(cutCube(512,8)    , true);
//     Test.assertEquals(cutCube(512,64)   , true);
//     Test.assertEquals(cutCube(50000,50) , false);
//     Test.assertEquals(cutCube(432,16)   , false);
//     Test.assertEquals(cutCube(256,8)    , false);
//     Test.assertEquals(cutCube(27,3)     , false);
//     Test.assertEquals(cutCube(123,456)  , false);
//     Test.assertEquals(cutCube(27,8)    , false);
    
// })})

// ******MY ANSWER********

function cutCube(volume,n){
    let a = Math.cbrt(volume / n)
    let b = Math.cbrt(n)
    if(a % 1 === 0 && b % 1 === 0){
      return true
    } else return false
  }