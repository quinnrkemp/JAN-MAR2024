  // CHALLENGE NAME-  Basic subclasses- Adam and Eve  

    // DESCRIPTION:

    // According to the creation myths of the Abrahamic religions, Adam and Eve were 
    // the first Humans to wander the Earth.

    // You have to do God's job. The creation method must return an array of length 2 
    // containing objects (representing Adam and Eve). The first object in the array 
    // should be an instance of the class Man. The second should be an instance of the 
    // class Woman. Both objects have to be subclasses of Human. Your job is to 
    // implement the Human, Man and Woman classes.

    // // ***STARTER CODE***

    // class God{
    //     /**
    //      * @returns Human[]
    //      */
    //       static create(){
    //         // code
    //       }
    //     }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("GodTest", function() {
    //     it("Adam should be a Man", function() {
    //       let humans = God.create()
    //       Test.assertEquals(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
    //     });
    // });
 
    // ******MY ANSWER********

    class God{
        static create(){
          let adam = new Man()
          let eva = new Woman()
          
          return [adam, eva]
        }
      }
      
      class Human {
        // Human things
      }
      
      class Man extends Human {
        // Man things
      }
      
      class Woman extends Human {
        // Woman things
      }