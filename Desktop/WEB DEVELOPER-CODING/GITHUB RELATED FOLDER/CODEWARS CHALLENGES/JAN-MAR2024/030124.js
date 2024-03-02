// CHALLENGE NAME-  Collatz Conjecture (3n+1)        (#2)

// DESCRIPTION:

// The Collatz conjecture (also known as 3n+1 conjecture) 
// is a conjecture that applying the following algorithm 
// to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a 
// positive n as input and returns the number of times you 
// need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 
// 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// // ***STARTER CODE***

// var hotpo = function(n){
//     if(n == 0) return 0; //Optional Handler to n = 0
    
// }

// //   ******TEST CASES*****

// const Test = require('@codewars/test-compat');

// describe("Test", function(){
//   it("Examples", function(){
//     Test.assertEquals(hotpo(1), 0);
//     Test.assertEquals(hotpo(5), 5);
//     Test.assertEquals(hotpo(6), 8);
//     Test.assertEquals(hotpo(23), 15);
//   });
// });

// ******MY ANSWER********

let hotpo = function(n) {
    let count = 0
    if (n < 2) {
        return 0
    }
    while (n > 1) {
        if (n % 2) {
            n = n * 3 + 1
        } else {
            n /= 2
        }
        count++
    }
    return count
}