    // CHALLENGE NAME-  You Complete Me   (7kata)

    // DESCRIPTION:

    // Task: concatenate one or more letters to the end of a given 
    // input string to create a string that reads the same forward 
    // as backward.

    // Specifications
    
    // Letters can only be added to the right hand side of the input string.
    
    // You are required to add at least one letter to the input string.
    
    // The shorter return string is the correct one. ie.. (ab)=> abba is Wrong, 
    // while (ab)=> aba is Right.
    
    // Inputs will consist of one or more letters, upper and lower case.
    
    // Strings are case sensitive. ie..(Gn)=> gng is Wrong, while (Gn)=> GnG is right.
    
    // Examples:
    
    // (a) => a + a => aa
    
    // (GG) => GG + G => GGG
    
    // (Ab) => Ab + A => AbA
    
    // (aba) => aba + ba => ababa
    
    // (aab) => aab + aa => aabaa
    
    

    // // ***STARTER CODE***

    // const complete = str =>{

    // }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold = 0;
    
    
    // describe("Example test cases", function() {
    //   it("given Baa", function() {
    //     assert.strictEqual(complete("Baa") , "BaaB"); 
    //   });
    
    //   it("given aaB", function() {
    //     assert.strictEqual(complete("aaB"), "aaBaa"); 
    //   });
      
    //     it("given x", function() {
    //     assert.strictEqual(complete("x"), "xx"); 
    //   });
      
    //       it("given aaBB", function() {
    //     assert.strictEqual(complete("aaBB"), "aaBBaa"); 
    //   });
      
    //         it("given aOOa", function() {
    //     assert.strictEqual(complete("aOOa"), "aOOaOOa"); 
    //   });
      
    //           it("given xyz", function() {
    //     assert.strictEqual(complete("xyz"), "xyzyx"); 
    //   });
      
    //             it("given AaaaA", function() {
    //     assert.strictEqual(complete("AaaaA"), "AaaaAaaaA"); 
    //   });
      
    //             it("given abab", function() {
    //     assert.strictEqual(complete("abab"), "ababa"); 
    //   });
      
    // }); 

    // ******MY ANSWER********

    const complete = str =>{
        for (let i = 1; i <= str.length; i++) {
          if (str.slice(i) == [...str.slice(i)].reverse().join(''))
          return str + [...str.slice(0,i)].reverse().join('')
        }
      } 

    //   ***answer from the solutions***