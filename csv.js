// INSTRUCTIONS


// ANSWER

function toCsvText(array) {
  
    const result = []
    array.forEach((el)=> result.push(el.join(',')))
    return result.join('\n')
  }