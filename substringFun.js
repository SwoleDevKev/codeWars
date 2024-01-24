// Instructions

/* Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list. */

// Answer


function nthChar(words){
    return newWord = words.reduce((acc,cur,index)=>{
      return acc + cur[index]
    },'')
   }