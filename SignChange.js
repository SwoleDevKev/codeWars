// Instructions

/*

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0



*/

// ANSWER

function catchSignChange(arr) {
   
    const PositveOrNegative = (num)=>{
      if (Math.sign(num) === 0 || Math.sign(num) === 1){
        return true
      } else{
        return null
      }
    }
    
   let result = 0
    for (let i =0; i < arr.length-1 ; i++){
      if (PositveOrNegative(arr[i]) !== PositveOrNegative(arr[i+1])){
        result +=1
      }
    }
    return result
    
  }