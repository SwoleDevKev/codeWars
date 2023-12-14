// INSTRUCTIONS

/*

Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0
*/


// ANSWERS


function closeCompare(a, b, margin){
 
    // for the first half we're determining what the smallest value is 
    // what the largest is and what the distance is between them
    const smallest = Math.min(a,b)
    const largest =  Math.max(a,b)
    const distance = Math.abs(largest - smallest)
    
    // next we're making it so that if the margin is null or undefined it is treated as 0
    margin = margin ?? 0
    
    // from there we follow the instruction and create a simple conditional statement that fits the instructions
    if (margin >= distance ){
      return 0
    }
    else if (a < b){
      return -1
    }
    else if (a > b){
      return 1
    }
  }