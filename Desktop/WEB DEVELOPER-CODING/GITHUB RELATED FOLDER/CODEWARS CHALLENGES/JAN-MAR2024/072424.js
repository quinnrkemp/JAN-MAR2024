 // CHALLENGE NAME-  Double Char   (#2)

    // DESCRIPTION:

    // Given a string, you have to return a string in which 
    // each character (case-sensitive) is repeated once.

    // Examples (Input -> Output):
    // * "String"      -> "SSttrriinngg"
    // * "Hello World" -> "HHeelllloo  WWoorrlldd"
    // * "1234!_ "     -> "11223344!!__  "

    // // ***STARTER CODE***

    // function doubleChar(str) {
    //     // Your code here
    //   } 

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("doubleChar", function() {
    //   it("works for some examples", function() {
    //     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    //     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    //     Test.assertEquals(doubleChar("1337"), "11333377");
    //     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    //     Test.assertEquals(doubleChar("123456"), "112233445566");
    //     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
    //   });
    // });

    // ******MY ANSWER********

    function doubleChar(str) {
        let doubleChar=''
        for(let i=0; i<str.length; i++){
         doubleChar+=str[i]+str[i];
        }
        return doubleChar
      }

    //   ****not my answer***

    // function doubleChar(str) {
    //     // return str.repeat(2).split('').join('')
    //     for (let i=0; i<=str.length-1; i++){ 
    //     //           return str[i].concat(str[i])
    //               console.log(str[i]+str[i])
              
    //       }    
    //       // Your code here
    //           } 
        