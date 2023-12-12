// Instructions 

/* 
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

*/

// Answer


function spoonerize(words) {
    const wordsArray = words.split(' ')
   
    const letter1 = wordsArray[0][0]
   
   wordsArray[0] = wordsArray[0].replace(wordsArray[0][0],wordsArray[1][0])
   wordsArray[1] = wordsArray[1].replace(wordsArray[1][0],letter1)
   
   return wordsArray.join(' ')
 
 }