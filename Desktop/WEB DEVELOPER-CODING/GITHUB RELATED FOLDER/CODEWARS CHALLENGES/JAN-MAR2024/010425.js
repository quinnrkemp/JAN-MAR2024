    // CHALLENGE NAME-  Grasshopper- Grade Book

    // DESCRIPTION:

    // Grade book
    // Complete the function so that it finds the average of 
    // the three scores passed to it and returns the letter 
    // value associated with that grade.
    
    // Numerical Score	Letter Grade
    // 90 <= score <= 100	'A'
    // 80 <= score < 90	'B'
    // 70 <= score < 80	'C'
    // 60 <= score < 70	'D'
    // 0 <= score < 60	'F'
    // Tested values are all between 0 and 100. Theres is 
    // no need to check for negative values or values greater 
    // than 100.

    // // ***STARTER CODE***

    // function getGrade (s1, s2, s3) {
    //     // Code here
    //   } 

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe('grade book', function () {
    //   it('should return an A', function () {
    //     Test.assertEquals(getGrade(95,90,93), 'A')
    //     Test.assertEquals(getGrade(100,85,96), 'A')
    //     Test.assertEquals(getGrade(92,93,94), 'A')
    //   })
    //   it('should return a B', function () {
    //     Test.assertEquals(getGrade(70,70,100), 'B')
    //     Test.assertEquals(getGrade(82,85,87), 'B')
    //     Test.assertEquals(getGrade(84,79,85), 'B')
    //     Test.assertEquals(getGrade(89,89,90), 'B') 
    //   })
    //     it('should return a C', function () {
    //     Test.assertEquals(getGrade(70,70,70), 'C')
    //     Test.assertEquals(getGrade(75,70,79), 'C')
    //     Test.assertEquals(getGrade(60,82,76), 'C')
    //   })
    //     it('should return a D', function () {
    //     Test.assertEquals(getGrade(65,70,59), 'D')
    //     Test.assertEquals(getGrade(66,62,68), 'D')
    //     Test.assertEquals(getGrade(58,62,70), 'D')
    //   })
    //     it('should return an F', function () {
    //     Test.assertEquals(getGrade(44,55,52), 'F')
    //     Test.assertEquals(getGrade(48,55,52), 'F')
    //     Test.assertEquals(getGrade(58,59,60), 'F')
    //   })
    // })

    // ******MY ANSWER********

    function getGrade (s1, s2, s3) {
        let av=(s1+s2+s3)/3
         return av>=90 && av<=100?'A':av>=80 && av<90?'B':av>=70 && av<80?'C':av>60 && av<70?'D':'F'
         // Code here
       }
            // ***answer #2***
    //    ***'drier' solution ***

    // function getGrade (s1, s2, s3) {
    //     let av=(s1+s2+s3)/3
    //      return av>=90?'A':av>=80?'B':av>=70?'C':av>60?'D':'F'
        
    //    }