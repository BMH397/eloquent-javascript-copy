// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  
  //Make an empty array to store the flattened result
  let result = [];  

  //Now loop through each subarray in the main array
  for (let array of arrays) {
     
    //Concatenate the sub-array to the result array
      result = result.concat(array);
  }

  //Return the flattened array
  return result;  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  
  //Make a loop with start continue while test(value) is true update value each iteration
  for (let value = start; test(value); value = update(value)) {  
  
    //Now execute the body function with the current value
    body(value);  
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  
  //First iterate over each element in the array
  for (let element of array) {  
     
     //And if the test function returns false for any element
    if (!test(element)) { 
          
      //Now return false
      return false;  
      }
  }
  
  //And if all elements pass the test return true
  return true;  
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  
  //Count how many characters belong to each writing direction
  let directions = countBy(text, char => {  
      
    //Get the script for the current character
    let script = characterScript(char.codePointAt(0));  
    
    //Return the direction or none if no script is found
    return script ? script.direction : "none";  
  
     //Filter out none since its not a valid direction
  }).filter(({name}) => name != "none"); 

  //And if there are no valid directions default to "ltr"
  if (directions.length == 0) return "ltr";  

  
  //Return the name of the most common direction
  return directions.reduce((a, b) => a.count > b.count ? a : b).name;  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};