    // CHALLENGE NAME-  Return the day

    // DESCRIPTION:

    // Complete the function which returns the weekday 
    // according to the input number:

    // 1 returns "Sunday"
    // 2 returns "Monday"
    // 3 returns "Tuesday"
    // 4 returns "Wednesday"
    // 5 returns "Thursday"
    // 6 returns "Friday"
    // 7 returns "Saturday"
    // Otherwise returns "Wrong, please enter a number between 1 and 7"

    // // ***STARTER CODE***

    // function whatday(num) { 

    //     // put your code here
      
    //   }  

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe( "whatday", function(){
    //   it( "should work for the examples" , function(){
    //     Test.assertEquals(whatday(1),'Sunday')
    //     Test.assertEquals(whatday(2), 'Monday')
    //     Test.assertEquals(whatday(3),'Tuesday')
    //        Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
    //     Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')
    
    //       });
    // });

    // ******MY ANSWER********

    function whatday(n) { 
        return n==1?"Sunday":n==2?"Monday":n==3?"Tuesday":n==4?"Wednesday":n==5?"Thursday":n==6?"Friday":n==7?"Saturday":"Wrong, please enter a number between 1 and 7"
        //  return 1?"Sunday"?
          // put your code here
        
        }
      