////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  //Make an empty array to hold the range values
  let result = [];  

  //And if start is equal to end return an empty array
  if (start === end) {
      return result;
  }

  //And if step is positive and start is less than end
  if (step > 0) {
      for (let i = start; i <= end; i += step) {
         
        //And add the current value to the result array 
        result.push(i);  
      }
  } 
  //If step is negative and start is greater than end
  else if (step < 0) {
      
    for (let i = start; i >= end; i += step) {
      
      //Then add the current value to the result array    
      result.push(i);  
      }
  }
//Finally return the final array containing range
  return result;  
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  //Make a variable to hold the sum of elements
  let total = 0;  

  //Now loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    
    //Add the current element to the total  
    total += arr[i];  
  }
    //Return the final sum after the loop ends
  return total;  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  //Make an empty array to hold the reversed elements
  let reversed = [];  

  //Now loop through the original array from the last element to the first
  for (let i = arr.length - 1; i >= 0; i--) {
      
    //Now add the current element to the reversed array
    reversed.push(arr[i]);  
  }
  

  //Return the new array that contains the elements in reverse order
  return reversed;  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  //Make a pointer at the start of the array
  let leftIndex = 0;  
  //Make a pointer at the end of the array
  let rightIndex = arr.length - 1;  

  //Now loop until the two pointers meet in the middle
  while (leftIndex < rightIndex) {
     
    //And then swap the elements at the left and right pointers
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;

      //Move the pointers towards the center
      leftIndex++;
      rightIndex--;
  }

  
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
  //Start with an empty list null
  let list = null;  

  //Now loop through the array from the last element to the first
  for (let i = array.length - 1; i >= 0; i--) {
      //And create a new object with value and rest properties
      list = {
          value: array[i],
          rest: list
      };
  }
//Return the final list structure
  return list;  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  
  //Make an empty array to hold the values
  let array = [];  

  //Now loop through the list until it reaches null
  while (list !== null) {
     
    //Then add the current value to the array
    array.push(list.value);  
    
    //Move to the next element in the list
    list = list.rest;  
  }

  //Return the final array containing all the values
  return array;  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {
    
    //Set the value of the new list node to the provided value  
    value: value,  
      
    //The rest of the list is the previous list passed as the second argument
    rest: list     
  };
}
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  //Base case if the list is null return undefined 
  if (!list) {
      return undefined;
  }

  //Base case if n is 0 return the value at the current list node
  if (n === 0) {
      return list.value;
  }

  //Recursive case move to the next node in the list and decrease n by 1
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  //First check if a and b are the same object or value
  if (a === b) return true;

  //Then check if a or b is null, or if a and b are not both objects
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
      return false;
  }

  //Get keys of both a and b
  let keysA = Object.keys(a), keysB = Object.keys(b);

  //Then check if a and b have the same number of keys
  if (keysA.length != keysB.length) return false;

  //Check each key in a to see if it exists in b and the values are deeply equal
  for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  //All checks passed! A and b are deeply equal
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};