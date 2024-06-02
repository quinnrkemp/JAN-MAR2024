// CHALLENGE NAME-  Who ate the cookie?  (#2)

// DESCRIPTION:

// For this problem you must create a program that says who 
// ate the last cookie. 
// If the input is a string then "Zach" ate the cookie. If 
// the input is a float or 
// an int then "Monica" ate the cookie. If the input is anything 
// else "the dog" ate 
// the cookie. The way to return the statement is: "Who ate the
//  last cookie? It was 
// (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It
//  was Zach! (The reason 
// you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct 
// spaces and punctuation.

// // ***STARTER CODE***

// function cookie(x){
// }

// //   ******TEST CASES*****

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
//   Test.assertEquals(cookie(26), "Who ate the last cookie? It was Monica!")
//   Test.assertEquals(cookie(2.3), "Who ate the last cookie? It was Monica!")
//   Test.assertEquals(cookie(true), "Who ate the last cookie? It was the dog!")
  
//     });
//   });

// ******MY ANSWER********

function cookie(x){
    let a= "Who ate the last cookie? It was "
    let z= "Zach!"
    let m= "Monica!"
    let d= "the dog!"
        return typeof x=== "string"? a+z : typeof x==="number"? a+m : a+d   
    // if (typeOf x==="string") {
    //   return a+z
    }