    // CHALLENGE NAME-  "this" is a problem

    // DESCRIPTION:

    // We want to create a constructor function 'NameMe', which 
    // takes first name and last name as parameters. The function 
    // combines the first and last names and saves the value in 
    // "name" property.

    // We already implemented that function, but when we actually 
    // run the code, the "name" property is accessible, but the 
    // "firstName" and "lastName" is not accessible. All the 
    // properties should be accessible. Can you find what's wrong 
    // with it? A test fixture is also available
    
    // function NameMe(first, last) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     return {name: this.firstName + ' ' + this.lastName};
    // }
    
    // var n = new NameMe('John', 'Doe');
    // n.firstName //Expected: John
    // n.lastName //Expected: Doe
    // n.name //Expected: John Doe

    // // ***STARTER CODE***

    // function NameMe(first, last) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     return {name: this.firstName + ' ' + this.lastName};
    // } 

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // var n = new NameMe('John', 'Doe');
    // Test.expect((typeof n.firstName != undefined && n.firstName == "John"), "Verifying First name. Object returned should contain the firstname: John");
    // Test.expect((typeof n.lastName != undefined && n.lastName == "Doe"), "Verifying Last name. Object returned should contain the lastname: Doe");
    // Test.expect((typeof n.name != undefined && n.name == "John Doe"), "Verifying full name. Object returned should contain the full name: John Doe");
    //   });
    // });

    // ******MY ANSWER********

    // function NameMe(first, last) {
    //     this.firstName = first;
    //     this.lastName = last;
    //   this.name= function() {  
    //   return this.firstName + ' ' + this.lastName"
    //   };
    // }

    function NameMe(first, last) {
        this.firstName = first;
        this.lastName  = last;
        this.name = first + ' ' + last;
    }

    // ***answer from the solutions***