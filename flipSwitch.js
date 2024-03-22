// Instructions
/*Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.*/

// Answer 

function flickSwitch(arr){
    let flick = true
    
    function change (){
      if (flick){
      flick = false
    } else{
      flick = true
    } 
    }
    
    return arr.map((element,index)=>{
       if (element === 'flick'){
         change();
         return flick
       } else {
         return flick
       }
    })
   
   }