// CHALLENGE NAME- Calculate BMI  (#2)

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// **********STARTER CODE**********

// function bmi(weight, height) {

//     return "";
//   }

// ****TEST CASES****

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(bmi(80, 1.80), "Normal");
//   });
// });

// *****MY ANSWER*****

function bmi(w, h) {
    let myBmi= w/(h*h)
    
    if (myBmi <= 18.5) {
        return "Underweight"
    }
    else if (myBmi <= 25.0) { 
         return "Normal"
    }
    else if (myBmi <= 30.0) { 
         return "Overweight"
    }
    else {
     return "Obese"
       }
      }
      