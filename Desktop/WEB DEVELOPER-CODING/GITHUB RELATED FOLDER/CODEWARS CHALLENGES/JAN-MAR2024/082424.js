 // CHALLENGE NAME-  Get lthe mean of an array

    // DESCRIPTION:

    // It's the academic year's end, fateful moment of 
    // your school report. The averages must be calculated. 
    // All the students come to you and entreat you to 
    // calculate their average for them. Easy ! You just 
    // need to write a script.

    // Return the average of the given array rounded down 
    // to its nearest integer.
    
    // The array will never be empty.

    // // ***STARTER CODE***

    // function getAverage(marks){
    //     //TODO : calculate the downward rounded average of the marks array
    //   } 

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(getAverage([2,2,2,2]),2);
    // Test.assertEquals(getAverage([1,2,3,4,5,]),3);
    // Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
    
    
    //   });
    // });

    // ******MY ANSWER********

    function getAverage(marks){
        const tot = marks.reduce(
          (acc, cur) => acc + cur,0)
        
        return Math.floor(tot/marks.length)
        
          //TODO : calculate the downward rounded average of the marks array
        }