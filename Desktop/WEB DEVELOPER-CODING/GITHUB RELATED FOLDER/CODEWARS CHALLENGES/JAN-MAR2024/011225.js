    // CHALLENGE NAME-  Barking mad

    // DESCRIPTION:

    // Teach snoopy and scooby doo how to bark using object 
    // methods. Currently only snoopy can bark and not scooby doo.

    // snoopy.bark(); // return "Woof"
    // scoobydoo.bark(); // undefined
    // Use method prototypes to enable all Dogs to bark.

    // // ***STARTER CODE***

    // function Dog (breed) {
    //     this.breed = breed;
    //   }
      
    //   var snoopy = new Dog("Beagle");
      
    //   snoopy.bark = function() {
    //     return "Woof";
    //   };
      
    //   var scoobydoo = new Dog("Great Dane");
     
    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.expect(snoopy.bark() === "Woof")
    // Test.expect(scoobydoo.bark() === "Woof")
    
    //   });
    // });

    // ******MY ANSWER********

    function Dog (breed) {
        this.breed = breed
        this.bark= function(){
          return 'Woof'
        }
      }
      
      var snoopy = new Dog("Beagle");
      
      snoopy.bark = function() {
        return "Woof";
      };
      
      var scoobydoo = new Dog("Great Dane");