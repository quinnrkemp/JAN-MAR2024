    // CHALLENGE NAME-  Get number from string   (#2)

    // DESCRIPTION:

    // Write a function which removes from string all non-digit 
    // characters and parse the remaining to number. 
    // E.g: "hell5o wor6ld" -> 56

    // Function:
    
    // getNumberFromString(s)

    // // ***STARTER CODE***

    // function getNumberFromString(s) {
    //     return 0;
    //   }  

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Basic tests", function() {
    //   it("should work as expected", function() {
    //     Test.assertSimilar(getNumberFromString("1"), 1);
    //     Test.assertSimilar(getNumberFromString("123"), 123);
    //     Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
    //   });
    // });

    // ******MY ANSWER********

    const getNumberFromString = (str) => +str.replace(/[^\d]/g, '');