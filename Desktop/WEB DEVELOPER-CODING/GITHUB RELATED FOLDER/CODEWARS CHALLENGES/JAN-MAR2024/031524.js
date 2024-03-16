    // CHALLENGE NAME-  Classy Extentions

    // DESCRIPTION:

    // Your task is to complete the Cat class which Extends Animal 
    // and replace the speak method to return the cats name + meows. 
    // e.g. 'Mr Whiskers meows.'
    // The name attribute is passed with this.name (JS), @name (Ruby) 
    // or self.name (Python).

    // // ***STARTER CODE***

    // class Cat extends Animal {
  
    // }    

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe("Cat tests", () => {
    //   it('Fixed Tests', () => {
    //     var cat = new Cat('Mr Whiskers');
    //     assert.strictEqual(cat.speak(),'Mr Whiskers meows.')
    //     cat = new Cat('Lamp');
    //     assert.strictEqual(cat.speak(),'Lamp meows.')
    //     cat = new Cat('$$Money Bags$$');
    //     assert.strictEqual(cat.speak(),'$$Money Bags$$ meows.')
    //     assert.instanceOf(cat, Animal, "Your class should extend the Animal class");
    //   });
    // });

    // ******MY ANSWER********

    class Cat extends Animal {
        speak() {
          return `${this.name} meows.`;
        }
      }