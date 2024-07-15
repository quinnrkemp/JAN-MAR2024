    // CHALLENGE NAME-  Training JS #31: methods of      (#2)
    // arrayObject---isArray() indexOf() and toString()

    // DESCRIPTION:

//     This lesson we learn the last three methods: isArray() 
//     indexOf() and toString(). Each of these three methods 
//     have their own purpose and put them together just because 
//     this is the last lesson of arrayObject ;-)

// Task

// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 
// Using string template and ternary operator can make your work easier.

//     // ***STARTER CODE***

//     function blackAndWhite(arr){
//         //coding here...
        
//       }  

//     //   ******TEST CASES*****
    
//     describe("Tests", () => {
//         it("test", () => {
//           Test.assertSimilar(blackAndWhite(5,13) , "It's a fake array");
//           Test.assertSimilar(blackAndWhite([5,13]) , "It's a black array");
//           Test.assertSimilar(blackAndWhite([5,12]) , "It's a white array");
       
//         });
//       });

    // ******MY ANSWER********

    function blackAndWhite(arr){
        if (Array.isArray(arr) !=true) {  
       return `It's a fake array`
        } 
        else if (arr.indexOf(5)!=-1 && arr.indexOf(13) !=-1) {
            return `It's a black array`
        }
        return `It's a white array`
                //coding here...
            
          }  