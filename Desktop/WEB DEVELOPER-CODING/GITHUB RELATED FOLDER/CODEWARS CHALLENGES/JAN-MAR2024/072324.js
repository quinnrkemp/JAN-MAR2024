// CHALLENGE NAME-  Grasshopper - Object syntax debug  (#2)

    // DESCRIPTION:

    // bject debugging
    // While making a zork-type game, you create an object of 
    // rooms. Unfortunately, the game is not working. Find all 
    // of the errors in the rooms object to get your game working 
    // again.
        
    // // ***STARTER CODE***

    // var rooms = {
    //     first: {
    //       description: 'This is the first room'
    //       items: {
    //         chair: 'The old chair looks comfortable',
    //         lamp: 'This lamp looks ancient'
    //     },
    //     second: {
    //       description: 'This is the second room'
    //       items: {
    //         couch: 'This couch looks like it would hurt your back,
    //         table: 'On the table there is an unopened bottle of water'
    //       }
    //     }
    //   }

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.expectNoError('Fix all of the errors', () => rooms)
    //     });
    //   });
      
    // ******MY ANSWER********

    var rooms = {
        first: {
          description: 'This is the first room',
          items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        }
},
        second: {
          description: 'This is the second room',
          items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
          }
        }
      }
    