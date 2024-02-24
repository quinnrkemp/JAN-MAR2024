// CHALLENGE NAME-  !a == a ?!   (#2)

// DESCRIPTION:

// You task to pass only this tests :

// a == false
// !a == false
// a == !a

// // ***STARTER CODE***

// const a = 

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals( a == false,  true, `a != false`);
// Test.assertEquals( !a == false, true, `!a != false`);
// Test.assertEquals( a == !a,     true, `a != !a`);
//   });
// });

// ******MY ANSWER********

const a = [];
function assertEquals(a){

  if(a == false){
  return true;
  }; 
  if(!a == false){
  return true;
  }; 
  if(a == false) {
  return true;
  }; 
}