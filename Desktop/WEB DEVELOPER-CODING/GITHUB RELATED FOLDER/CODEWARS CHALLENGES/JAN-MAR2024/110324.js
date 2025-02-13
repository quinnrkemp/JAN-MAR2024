    // CHALLENGE NAME-  Student's Final Grade

    // DESCRIPTION:

    // Create a function finalGrade, which calculates 
    // the final grade of a student depending on two 
    // parameters: a grade for the exam and a number 
    // of completed projects.

    // This function should take two arguments: exam - 
    // grade for exam (from 0 to 100); projects - number 
    // of completed projects (from 0 and above);
    
    // This function should return a number (final grade). 
    // There are four types of final grades:
    
    // 100, if a grade for the exam is more than 90 or if 
    // a number of completed projects more than 10.
    // 90, if a grade for the exam is more than 75 and if 
    // a number of completed projects is minimum 5.
    // 75, if a grade for the exam is more than 50 and if 
    // a number of completed projects is minimum 2.
    // 0, in other cases
    // Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0

    // // ***STARTER CODE***

    // function finalGrade (exam, projects) {
    //     return // final grade
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {  
    //     assert.strictEqual(finalGrade(100, 12), 100);
    //     assert.strictEqual(finalGrade(85, 5), 90);
    //   });
    // });

    // ******MY ANSWER********
    function finalGrade (e, p) {
        return e>90||p>10?100:e>75&&p<=5?90:e>50&&p<=2?75:0
       //   return // final grade
       }


    //    ******Incomplete answer****