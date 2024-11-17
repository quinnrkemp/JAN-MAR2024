    // CHALLENGE NAME-  Do you speak "English"?

    // DESCRIPTION:

    // Given a string of arbitrary length with any ascii characters. 
    // Write a function to determine whether the string contains the 
    // whole word "English".

    // The order of characters is important -- a string "abcEnglishdef" 
    // is correct but "abcnEglishsef" is not correct.
    
    // Upper or lower case letter does not matter -- "eNglisH" is also correct.
    
    // Return value as boolean values, true for the string to contains 
    // "English", false for it does not.

    // // ***STARTER CODE***

    // function spEng(sentence){
    //     //write your code here
    //     } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(spEng("english"), true);
    //   Test.assertEquals(spEng("egnlish"), false);
    //     });
    //   });
      

    // ******MY ANSWER********

    function spEng(s){
        return s.toLowerCase().includes("english")
          //write your code here
        }