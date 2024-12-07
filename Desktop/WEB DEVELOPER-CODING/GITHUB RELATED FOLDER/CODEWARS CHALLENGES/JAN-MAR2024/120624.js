    // CHALLENGE NAME-  Exclamation marks series #11: 
    // Replace all vowel to exclamation mark in the sentence

    // DESCRIPTION:

    // Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

    // Examples
    // replace("Hi!") === "H!!"
    // replace("!Hi! Hi!") === "!H!! H!!"
    // replace("aeiou") === "!!!!!"
    // replace("ABCDE") === "!BCD!"

    // // ***STARTER CODE***

    // function replace(s){
    //     //coding and coding....
        
        
    //   }

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Basic Tests", function(){
    //   it("It should works for basic tests", function(){
    
    // Test.assertSimilar(replace("Hi!") , "H!!")
    // Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
    // Test.assertSimilar(replace("aeiou") , "!!!!!")
    // Test.assertSimilar(replace("ABCDE") , "!BCD!")
    
    // })})

    // ******MY ANSWER********

    const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

    // ****answer from the solutions***