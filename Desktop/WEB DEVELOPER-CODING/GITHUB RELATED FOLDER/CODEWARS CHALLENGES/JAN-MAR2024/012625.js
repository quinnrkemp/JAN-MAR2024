    // CHALLENGE NAME-  Find your caterer  (7Kyu)

    // DESCRIPTION:

    // You need to hire a catering company out of three for 
    // lunch in a birthday party. The first caterer offers 
    // only a basic buffet which costs $15 per person. The 
    // second one has an economy buffet at $20 per person 
    // and the third one has a premium buffet at $30 per 
    // person. The third one gives a 20% discount if the 
    // number of persons to be served is greater than 60. 
    // You want to spend the maximum that fits into the budget.

    // The function takes two arguments denoting the budget 
    // in $ and the number of people. Return 1, 2 or 3 for 
    // the three caterers as per the above criteria. Return 
    // -1 if there are no people or the budget is lower than 
    // the cost of buffets from the first caterer.
    
    // Number of orders is always equal to number of people.
    
    // For example,
    
    
    // budget, people => (200, 9) will return 2.
    
    // budget, people => (300, 9) will return 3 and so on.

    // // ***STARTER CODE***

    // function findCaterer(budget, people){
  
    //     return 0;
    //   } 

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    
    // describe("Sample Tests", () => {
    //   it("budget = 150, people = 10, expected = 1", () => {
    //     assert.strictEqual(findCaterer(150, 10), 1);
    //   });
      
    //   it("budget = 1500, people = 60, expected = 2", () => {
    //     assert.strictEqual(findCaterer(1500, 60), 2);
    //   });
      
    //   it("budget = 1500, people = 61, expected = 3", () => {
    //     assert.strictEqual(findCaterer(1500, 61), 3);
    //   });
      
    //   it("budget = 100, people = 0, expected = -1", () => {
    //     assert.strictEqual(findCaterer(100, 0), -1);
    //   });
      
    //   it("budget = 200, people = 5, expected = 3", () => {
    //     assert.strictEqual(findCaterer(200, 5), 3);
    //   });
      
    //   it("budget = 1000, people = 45, expected = 2", () => {
    //     assert.strictEqual(findCaterer(1000, 45), 2);
    //   });
      
    //   it("budget = 940, people = 70, expected = -1", () => {
    //     assert.strictEqual(findCaterer(940, 70), -1);
    //   });
    // });

    // ******MY ANSWER********

    function findCaterer(b, p){
        let cat1= p*15
        let cat2= p*20
        let cat3= p*30
        let cat3D= p*30*0.8
        let twoArr= [cat1,cat2,cat3]
        let three=twoArr.filter((e) => e <=b)
        let catMax=Math.max(...three)
        if (p<1 || b<15 || cat1>b) {
          return -1
        }
        else if (p>60 && cat3D<=b || catMax==cat3){
          return 3
        }
          else if (catMax==cat2){
            return 2 
          }
            return 1 
        }
        
