    // *****more practice work*******
    
    // CHALLENGE NAME-  If you can't sleep, just count sheep!!  

    // DESCRIPTION:

    // If you can't sleep, just count sheeps!!

    // Task:
    // Given a non-negative integer, 3 for example, return 
    // a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
    // Input will always be valid, i.e. no negative integers.

    // // ***STARTER CODE***

    // var countSheep = function (num){
    // }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Fixed tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(countSheep(0), "");
    //     assert.strictEqual(countSheep(1), "1 sheep...");
    //     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    //     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
    //   });
    // });

// **********practice work***********

function countSheep (num){
 let str= " "
for (let i=1; i<=num;i++) {
    // str.concat(`${num} sheep...`)
    str+= `${i} sheep...`
}
console.log(str)
}  
countSheep(3)