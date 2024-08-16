////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Define a function named min that takes two parameters a and b
function min(a, b) {         
 
  //Now check if a is less than b
  if (a < b) {             
     
    //If true return a is the minimum.
    return a;            
   // Otherwise if a is not less than b
  } else {                 
     
    //Finally return b either less than a or they are equal
    return b;            
  }
 }
 

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Make a function named `isEven` that takes one parameter n
function isEven(n) {                  
  //Base Case 1 Check if n is 0
 //If n is 0 return true because 0 is even
  if (n === 0) {                    
      return true;                  
 //Base Case 2 Check if n is 1
    } else if (n === 1) {             
   //If n is 1 return false because 1 is odd
      return false;                 
  //Check if `n` is negative.
    } else if (n < 0) {               
   
   //Convert n to positive and call isEven recursively with -n 
      return isEven(-n);            
  
    //Recursive Case if n is greater than 1
    } else {                          
      
     //Subtract 2 from n and call isEven recursively with n - 2 
      return isEven(n - 2);         
  }
 }
 
 
 

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {
   //Make a counter to keep track of occurrences
  let count = 0; 

  //Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    
    //Check if the current character matches the target character
      if (str[i] === char) {
      
      //And if it matches increment the counter
        count++;  
      }
  }

  //Return the final count after the loop ends
  return count;  
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
  //Make a counter to keep track of B 
  let count = 0;  

  //Now loop through each character in the string
  for (let i = 0; i < str.length; i++) {
      
    //Now check if the current character is B
      if (str[i] === 'B') {
          
        //If it matches increment the counter
        count++;  
      }
  }
//Return the final count after the loop ends
  return count;  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};