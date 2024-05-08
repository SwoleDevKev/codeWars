// Instructions 

/*
Given two integers a and b, return the sum of the numerator and the denominator of the reduced fraction a/b.

Example
For a = 2, b = 4, the result should be 3

Since 2/4 = 1/2 => 1 + 2 = 3.

For a = 10, b = 100, the result should be 11

Since 10/100 = 1/10 => 1 + 10 = 11.

*/

//Answer 

function fraction(a, b) {
   
    const calculateGcd = (x,y)=> {
      if (!y){
        return x
      }
      return calculateGcd(y,x%y)
    }
    
    const gcd = calculateGcd(a,b)
      
   return (a/gcd) + (b/gcd)
  }