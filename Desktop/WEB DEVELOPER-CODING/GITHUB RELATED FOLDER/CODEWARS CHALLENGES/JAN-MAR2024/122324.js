    // CHALLENGE NAME-  Correct the mistakes of the 
            //          character recognition software

    // DESCRIPTION:

    // Character recognition software is widely used to digitise 
    // printed texts. Thus the texts can be edited, searched and 
    // stored on a computer.

    // When documents (especially pretty old ones written with a 
    //     typewriter), are digitised character recognition softwares 
    //     often make mistakes.
    
    // Your task is correct the errors in the digitised text. You 
    // only have to handle the following mistakes:
    
    // S is misinterpreted as 5
    // O is misinterpreted as 0
    // I is misinterpreted as 1
    // The test cases contain numbers only by mistake.

    // // ***STARTER CODE***

    // function correct(string)
    // {
    //     // your code here
    // }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Tests", () => {
    //   it("test", () => {
    //     assert.strictEqual(correct("L0ND0N"),"LONDON");
    //     assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    //     assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    //     assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    //     assert.strictEqual(correct("PAR15"),"PARIS");
    //   });
    // });

    // ******MY ANSWER********

    function correct(str){
        return str.replaceAll('5',"S").replaceAll('0',"O").replaceAll('1',"I") 
         
          //  let one= str.replaceAll('5',"S") 
        //  let two= str.replaceAll('0',"O") 
        //  let three= str.replaceAll('1',"I") 
        // return one && two && three
         // return str.includes('5')?one:str.includes('0')?two:three
        //  return one || two || three
            // your code here
        }

