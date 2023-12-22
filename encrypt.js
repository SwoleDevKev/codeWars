// Instructions


// Answer



const encryptThis = function(text) {
    if (text.length <= 2) {
      return text.replace(text[0],text.charCodeAt(text[0]))
     
    } else{
        const words = text.split(' ')
    
    const result = words.map( (word) => {
      
      if (word.length <= 2) {
      return word.replace(word[0],word.charCodeAt(word[0]))
     
    }
      
      const switchedWord = word[0] + word[word.length - 1] + word.substring(2, word.length - 1) + word[1];
    
      const result = switchedWord.replace(switchedWord[0],switchedWord.charCodeAt(word[0]))
     
      return result
      
    })
    
    return result.join(' ')
    }
    
  }

