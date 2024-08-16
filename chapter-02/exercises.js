
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(n) {
  for (let i = 1; i <= n; i++) {
      console.log('#'.repeat(i));
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  //Initialize an array to store the results
  const results = [];  

  //Now loop through each number from 'start' to 'end'
  for (let i = start; i <= end; i++) {
      
      //And if the current number i is divisible by both 3 and 5
      if (i % 3 === 0 && i % 5 === 0) {
      
        //Push fizzbuzz to the results array    
        results.push('fizzbuzz');  
      } 
      //And if the current number i is divisible by 3 only
      else if (i % 3 === 0) {
      
        //Push fizz to the results array    
        results.push('fizz');  
      } 
      //And if the current number i is divisible by 5 only
      else if (i % 5 === 0) {
      
        //Push buzz to the results array    
        results.push('buzz');  
      } 
      //If the current number i is not divisible by 3 or 5
      else {
       
        // Push the number i to the results array  
        results.push(i);  
      }
  }

  // Log each result individually to match the expected output format
  results.forEach(result => console.log(result));
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/
//Define a function named drawChessboard that takes one parameter size (This was so hard btw lol)
function drawChessboard(size) {
 
  //Make an empty string board that will hold the entire chessboard
 let board = '';
  //Loop from y = 0 to y < size incrementing y by 1 each time
 for (let y = 0; y < size; y++) {
   
   //Make an empty string row for the current row
   let row = '';
    
   //Now loop from x = 0 to x < size incrementing x by 1 each time
   for (let x = 0; x < size; x++) {
        
     //Now check if the sum of x and y is even using the stricly equal operator
     if ((x + y) % 2 === 0) {
            
       //And if true add a space ' ' to row
       row += ' ';
     
       //If false
     } else {
            
       // Add a # to row
       row += '#';
         }
     }


     //Now add the row string to board followed by a newline character \n'
     board += row + '\n';
 }
     //Now print board string to the console
 console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}