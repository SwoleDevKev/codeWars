// Instructions

/* 
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
*/

// Answer

function findMissingLetter(array){
    for (let i=1; i<array.length; i++){
      let curVal= array[i].charCodeAt()
      let prevVal = array[i-1].charCodeAt()
     
      if ((curVal - prevVal ) > 1) {
        return String.fromCharCode((curVal -1))
      }
    };
  }