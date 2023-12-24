// INSTRUCTIONS
/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".


*/
// ANSWER

function dashatize(num) {
  
    let stringNum = String(num)
    if (!num){
      return stringNum
    }
    
  if (!Number(stringNum[0])){
      stringNum = stringNum.substring(1,stringNum.length)
  }
  arrWithDash = stringNum.split('').map((number) => Number(number)%2 !== 0 ? `-${number}-`: number)
    
  let result = arrWithDash.join('').split('--').join('-')
  
  if(result[0] == '-'){
       result = result.substring(1)
    } 
  if(result[result.length-1] == '-'){
       result = result.substring(0,result.length-1)
    }
    return result
  }