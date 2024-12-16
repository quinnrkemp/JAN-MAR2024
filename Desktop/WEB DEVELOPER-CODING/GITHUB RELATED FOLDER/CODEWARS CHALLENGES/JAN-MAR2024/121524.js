    // CHALLENGE NAME-  Grasshopper - Personalized Message

    // DESCRIPTION:

    // Create a function that gives a personalized greeting. This 
    // function takes two parameters: name and owner.

    // Use conditionals to return the proper message:
    
    // case	return
    // name equals owner	'Hello boss'
    // otherwise	'Hello guest'

    // // ***STARTER CODE***

    // function greet (name, owner) {

    //     }  

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
    // Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
    //   });
    // });

    // ******MY ANSWER********

    function greet (n, o) {
        return n===o?`Hello boss`:`Hello guest`
          
          // Add code here
        }