    // CHALLENGE NAME-  Find Nearest square number

    // DESCRIPTION:

    Your task is to find the nearest square number of a 
    positive integer n. In mathematics, a square number or 
    perfect square is an integer that is the square of an 
    integer; in other words, it is the product of some integer 
    with itself.

    For example, if n = 111, then the nearest square number 
    equals 121, since 111 is closer to 121, the square of 11, 
    than 100, the square of 10.
    
    If n is already a perfect square (e.g. n = 144, n = 81, 
        etc.), you need to just return n.
    
    Good luck :)

    // ***STARTER CODE***

    function nearestSq(n){
        // your code
    }   

    //   ******TEST CASES*****
    
    const chai = require('chai');
    const assert = chai.assert;
    
    describe("Find Nearest square number",() => {
      it("Sample tests", () => {
        assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
        assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
        assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
        assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
        assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
      })
    });

    // ******MY ANSWER********

    function nearestSq(n){
        let even=Math.sqrt(n)  
        let up= Math.ceil(Math.sqrt(n))
        let down= Math.floor(Math.sqrt(n))  
        if (even===up || even===down){
          return even
        }
         else if((up-even) < (even-down)){ 
        return up**2
        
        }
          return down**2
          //    return Math.floor(Math.sqrt(111))
          // your code 10 vs 10.54 vs 11
        //             100   111     121  
        //             1     1.414     2
        //                .414    .586
        }