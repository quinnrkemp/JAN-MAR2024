 // CHALLENGE NAME-  Dollars and Cents

    // DESCRIPTION:

    // The company you work for has just been awarded a contract 
    // to build a payment gateway. In order to help move things 
    // along, you have volunteered to create a function that will 
    // take a float and return the amount formatting in dollars 
    // and cents.

    // 39.99 becomes $39.99
    
    // The rest of your team will make sure that the argument is 
    // sanitized before being passed to your function although 
    // you will need to account for adding trailing zeros if 
    // they are missing (though you won't have to worry about 
    // a dangling period).
    
    // Examples:
    
    // 3 needs to become $3.00
    
    // 3.1 needs to become $3.10
    // Good luck! Your team knows they can count on you!

    // // ***STARTER CODE***

    // function formatMoney(amount){
    //     // your formatting code here
    //   } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(formatMoney(39.99), '$39.99', 'That\'s not formatted the way we expected.');
    //     });
    //   });
      

    // ******MY ANSWER********

    function formatMoney(amount){
        return `$${amount.toFixed(2)}`   
        // your formatting code here
        }