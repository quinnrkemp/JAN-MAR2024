// CHALLENGE NAME-  Exclamation marks series #6: Remove n exclamation   (#2)
    //                  marks in the sentence from left to right

    // DESCRIPTION:

    // Remove n exclamation marks in the sentence from left to right. n is 
    // positive integer.

    // Examples
    // remove("Hi!",1) === "Hi"
    // remove("Hi!",100) === "Hi"
    // remove("Hi!!!",1) === "Hi!!"
    // remove("Hi!!!",100) === "Hi"
    // remove("!Hi",1) === "Hi"
    // remove("!Hi!",1) === "Hi!"
    // remove("!Hi!",100) === "Hi"
    // remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
    // remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
    // remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
    // remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

    // // ***STARTER CODE***

    // function remove(s,n){
    //     //coding and coding....
            
    //   }

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Basic Tests", function(){
    //   it("It should works for basic tests", function(){
    
    // Test.assertSimilar(remove("Hi!",1) , "Hi")
    // Test.assertSimilar(remove("Hi!",100) , "Hi")
    // Test.assertSimilar(remove("Hi!!!",1) , "Hi!!")
    // Test.assertSimilar(remove("Hi!!!",100) , "Hi")
    // Test.assertSimilar(remove("!Hi",1) , "Hi")
    // Test.assertSimilar(remove("!Hi!",1) , "Hi!")
    // Test.assertSimilar(remove("!Hi!",100) , "Hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
    // Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
    // })})

    // ******MY ANSWER********

    const remove = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;