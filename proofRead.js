// INSTRUCTIONS
/*
You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/

//ANSWER

function proofread (str) { 

    const lowerCaseString = str.toLowerCase()
    
      if (lowerCaseString.includes('.')){
            const sentences = lowerCaseString.split('.')
    
            const capitalizedSentence = sentences.map((sentence) => {
                return sentence.replace(sentence.trim()[0],sentence.trim()[0]?.toUpperCase())
                })
    
      return capitalizedSentence.map((sentence)=> sentence.replace(/ie/gi,'ei')).join('.')
    
    } 
      else {
            const capitalizedString = lowerCaseString.replace(lowerCaseString[0],lowerCaseString[0].toUpperCase()) 
      return capitalizedString.replace(/ie/gi,'ei')
    }
    
    } 
    
    
proofread ("ShE deCIeved HiM.");