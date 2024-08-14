 // CHALLENGE NAME-  String Templates - Bug Fixing #5

    // DESCRIPTION:

    // Oh no! Timmy hasn't followed instructions very carefully 
    // and forgot how to use the new String Template feature, Help 
    // Timmy with his string template so it works as he expects!

    // // ***STARTER CODE***

    // function buildString(...template){
    //     return `I like #{template.join(',')}!`;
    //   }  

    // //   ******TEST CASES*****
    
    // const assert = require('chai').assert


    // describe('Fixed Tests', function(){
    //   it('Fixed Tests', function(){
    //     assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
    //     assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
    //     assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
    //   })
    // });

    // ******MY ANSWER********

    function buildString(...template){
        return `I like ${template.join(', ')}!`;
      }