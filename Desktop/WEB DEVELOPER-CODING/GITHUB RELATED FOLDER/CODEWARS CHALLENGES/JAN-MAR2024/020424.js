// CHALLENGE NAME-  Multiply the number   (#2)

    // DESCRIPTION:

    // Jack really likes his number five: the trick here is 
    // that you have to multiply each number by 5 raised to the 
    // number of digits of each numbers, so, for example:

    // multiply(3)==15 // 3 * 5¹
    // multiply(10)==250 // 10 * 5²
    // multiply(200)==25000 // 200 * 5³
    // multiply(0)==0 // 0 * 5¹
    // multiply(-3)==-15 // -3 * 5¹

    // // ***STARTER CODE***

    // function multiply(number){
    //     //your code here
    //   }

    // //   ******TEST CASES*****
    
    // describe("Basic Tests",() =>{
    //     Test.assertEquals(multiply(10),250);
    //     Test.assertEquals(multiply(5),25);
    //     Test.assertEquals(multiply(200),25000);
    //     Test.assertEquals(multiply(0),0);
    //     Test.assertEquals(multiply(-2),-10);
    //     })

    // ******MY ANSWER********

    function multiply(num){
        if (num < 0) {
         return Number(num) * (5**(num.toString().length-1)) 
        } 
       else { return Number(num) * (5**(num.toString().length))  
             }
           }