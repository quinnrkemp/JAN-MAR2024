 // CHALLENGE NAME-  Sort and Star   (#2)

    // DESCRIPTION:

    // You will be given a list of strings. You must sort it 
    // alphabetically (case-sensitive, and based on the ASCII 
    //     values of the chars) and then return the first value.

    // The returned value must be a string, and have "***" between 
    // each of its letters.
    
    // You should not remove or add elements from/to the array.
    
    //     // ***STARTER CODE***

    //     function twoSort(s) {

    //     }    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests",() =>{
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    //     assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
    //   });
    // });

    // ******MY ANSWER********

    function twoSort(s) {
        let accum = 'zzz';
        let star = '***';
        let answer = '';
        for(let word of s){
          if(word<accum){
            accum = word;
          }
        }
        for(let i = 0; i < accum.length; i++){
          if(i < accum.length -1){
          answer += accum[i] + star;
          }else{
            answer += accum[i];
          }
        }
      
        return answer;
      }