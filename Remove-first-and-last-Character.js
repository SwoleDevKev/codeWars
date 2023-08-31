/* 
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/

// Answer

function array(string) {
    let arr = string.split(',')
    
    if (arr.length > 2) {
      arr.pop()
      arr.shift()
      return arr.join(' ')
    } else {
      return null
    }
   }