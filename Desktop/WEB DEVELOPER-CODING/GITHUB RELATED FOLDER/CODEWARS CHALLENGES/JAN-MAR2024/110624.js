    // CHALLENGE NAME-  Cat years, Dog years

    // DESCRIPTION:

    // I have a cat and a dog.

    // I got them at the same time as kitten/puppy. 
    // That was humanYears years ago.
    
    // Return their respective ages now as 
    // [humanYears,catYears,dogYears]
    
    // NOTES:
    
    // humanYears >= 1
    // humanYears are whole numbers only
    // Cat Years
    // 15 cat years for first year
    // +9 cat years for second year
    // +4 cat years for each year after that
    // Dog Years
    // 15 dog years for first year
    // +9 dog years for second year
    // +5 dog years for each year after that
    

    // // ***STARTER CODE***

    // var humanYearsCatYearsDogYears = function(humanYears) {
    //     // Your code here!
    //     return [0,0,0];
    //   }
        

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Example Tests", function() {
    
    //   it("one", function() {
    //     Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
    //   });
    
    //   it("two", function() {
    //     Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
    //   });
    
    //   it("ten", function() {
    //     Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
    //   });
    
    // });

    // ******MY ANSWER********

    var humanYearsCatYearsDogYears = function(humanYears) {
        var catYears = 0;
        var dogYears = 0;
        
        if (humanYears === 1) {
          catYears = 15;
          dogYears = 15;
        } else if (humanYears === 2) {
          catYears = 24;
          dogYears = 24;
        } else if (humanYears > 2) {
          catYears = 24 + (humanYears - 2) * 4;
          dogYears = 24 + (humanYears - 2) * 5;
        }
      
        return [humanYears, catYears, dogYears];
      }

    //   *******answer from the solutions*****
      