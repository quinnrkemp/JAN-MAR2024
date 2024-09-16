 // CHALLENGE NAME-  Find the Difference in Age 
//  between Oldest and Youngest Family Members

//     // DESCRIPTION:

//     At the annual family gathering, the family likes to find 
//     the oldest living family member’s age and the youngest 
//     family member’s age and calculate the difference between 
//     them.

//     You will be given an array of all the family members' 
//     ages, in any order. The ages will be given in whole 
//     numbers, so a baby of 5 months, will have an ascribed 
//     ‘age’ of 0. Return a new array (a tuple in Python) with 
//     [youngest age, oldest age, difference between the youngest 
//     and oldest age].

//     // ***STARTER CODE***

//     function differenceInAges(ages){
//         return [0, 0, 0];
//       }    

//     //   ******TEST CASES*****
    
//     const {assert} = require("chai");

//     describe("Tests", () => {
//       it("Sample test", () => {
//         assert.deepEqual(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
//         assert.deepEqual(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
//       });
//     });
    

    // ******MY ANSWER********
    function differenceInAges(ages){
        let min= Math.min(...ages)
        let max= Math.max(...ages)  
        let diff= max-min
        
          return [min, max, diff];
        }