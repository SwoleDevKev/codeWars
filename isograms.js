function isIsogram(str){
  
    let result = true
    const obj = {}
    
    for (let letter of str) {
      if (letter.toLowerCase() in obj){
        result = false
      } else {
        obj[letter.toLowerCase()] = 'letter'
      }
    }
    return result
    
  }