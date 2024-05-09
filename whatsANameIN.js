// Instructions

/* Task
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

*/
// answer

function nameInStr(str, name){
    let currentLetter = 0
    
    for (let i=0; i < str.length && currentLetter < name.length; i++){
      if (str[i].toLowerCase() === name[currentLetter].toLowerCase() ){
        currentLetter++
      }
    }
     return currentLetter == name.length ? true : false
    }

