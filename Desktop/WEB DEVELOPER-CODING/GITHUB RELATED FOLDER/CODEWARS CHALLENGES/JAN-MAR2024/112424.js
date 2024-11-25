    // CHALLENGE NAME-  Simple Fun #352: Reagent Formula

    // DESCRIPTION:

    // Now we will confect a reagent. There are eight materials to 
    // choose from, numbered 1,2,..., 8 respectively.

    // We know the rules of confect:
    
    // material1 and material2 cannot be selected at the same time
    // material3 and material4 cannot be selected at the same time
    // material5 and material6 must be selected at the same time
    // material7 or  material8 must be selected(at least one, or both)
    // Task
    // You are given a integer array formula. Array contains only 
    // digits 1-8 that represents material 1-8. Your task is to 
    // determine if the formula is valid. Returns true if it's valid, 
    // false otherwise.
    
    // Example
    // For formula = [1,3,7], The output should be true.
    
    // For formula = [7,1,2,3], The output should be false.
    
    // For formula = [1,3,5,7], The output should be false.
    
    // For formula = [1,5,6,7,3], The output should be true.
    
    // For formula = [5,6,7], The output should be true.
    
    // For formula = [5,6,7,8], The output should be true.
    
    // For formula = [6,7,8], The output should be false.
    
    // For formula = [7,8], The output should be true.
    
    // Note
    // All inputs are valid. Array contains at least 1 digit. Each 
    // digit appears at most once.

    // // ***STARTER CODE***

    // function isValid(formula){
    //     //coding and coding..
        
    //   }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Basic Tests", function(){ 
    // it("It should works for basic tests.", function(){
    
    // Test.assertEquals(isValid([1,3,7]),true)
    
    // Test.assertEquals(isValid([7,1,2,3]),false)
    
    // Test.assertEquals(isValid([1,3,5,7]),false)
    
    // Test.assertEquals(isValid([1,5,6,7,3]),true)
    
    // Test.assertEquals(isValid([5,6,7]),true)
    
    // Test.assertEquals(isValid([5,6,7,8]),true)
    
    // Test.assertEquals(isValid([6,7,8]),false)
    
    // Test.assertEquals(isValid([7,8]),true)
    
    // })})

    // ******MY ANSWER********

    function isValid(f){
        // return f.includes(1 && 2) || f.includes(3 && 4) || !f.includes(5 && 6)?false:true
        if (f.includes(1)&&f.includes(2)) {
          return false
        }
          else if (f.includes(3)&&f.includes(4)) {
            return false
          }
        //     else if (f.includes(5) || f.includes(6)) {
        //     return false
        //   }
              else if (!f.includes(7) || !f.includes(8)) {
            return false
          }
          return true
          //coding and coding..
          
        }
// *****This code is not correct*****        