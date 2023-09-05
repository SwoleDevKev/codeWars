// Instrutions
/*

*/


// Answer

function isDivisible(...arg){
    // create a variable to store result of our division
      let arr = []
    // check if each argument is divisible by the first argument
    // if it isn't we add false to our array if it is we add true
      for (let i=1; i< arg.length; i++){
        
        arg[0]%arg[i] != 0 ? arr.push(false): arr.push(true)
      }
    // if false was added to our array we now know 
    // the first number was not divisible by at least one other number 
    // therefore our result is false
    // otherwise our result is true
     return arr.includes(false) ? false : true
    }