    // CHALLENGE NAME-  Training JS #4: Basic data types--Array  (#2)

    // DESCRIPTION:

    // I've written five functions. Each function receives a parameter arr 
    // which is an array. Complete the functions using arr inside the function 
    // bodies.

    // 1. getLength(arr)    should return length of arr
    // 2. getFirst(arr)     should return the first element of arr
    // 3. getLast(arr)      should return the last element of arr
    // 4. pushElement(arr)  should push an element to arr, and then return arr
    // 5. popElement(arr)   should pop an element from arr, and then return arr

    // // ***STARTER CODE***

    // function getLength(arr){
    //     //return length of arr
    //     return ?
    //   }
    //   function getFirst(arr){
    //     //return the first element of arr
    //     return ?
    //   }
    //   function getLast(arr){
    //     //return the last element of arr
    //     return ?
    //   }
    //   function pushElement(arr){
    //     var el=1;
    //     //push el to arr
        
    //     return arr
    //   }
    //   function popElement(arr){
    //     //pop an element from arr
        
    //     return ?
    //   } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(getLength([1,2,3]),3);
    //       Test.assertSimilar(getFirst([1,2,3]),1);
    //       Test.assertSimilar(getLast([1,2,3]),3);
    //       Test.assertSimilar(pushElement([1,2,3]).length,4);
    //       Test.assertSimilar(popElement([1,2,3]).length,2);
    //     });
    //   });
      
    // ******MY ANSWER********

    function getLength(arr){
        //return length of arr
        return arr.length
      }
      function getFirst(arr){
        //return the first element of arr
        return arr[0]
      }
      function getLast(arr){
        //return the last element of arr
        return arr[arr.length-1]
      }
      function pushElement(arr){
        var el=1;
        //push el to arr
         arr.push(el)
      return  arr
      }
      function popElement(arr){
        //pop an element from arr
         arr.pop()
        return arr
      } 