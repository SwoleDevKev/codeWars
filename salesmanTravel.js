// Instructions

/*
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

*/

// ANSWER


function travel(r, zipcode) {
    const arrayOfAddresses = r.split(',')
    const relevantAddresses = arrayOfAddresses.filter((addy)=> addy.includes(zipcode))
    const streetNumArr = []
    const streetsArr = []
    
    const zip = zipcode.split(' ')[1]
    
    
    if(!zipcode){
      return ':/'
    }if(!relevantAddresses || zip.length < 5){
      return zipcode+':/'
    }
    
    relevantAddresses.forEach((addy)=> {
      const splitAddy = addy.split(' ')
      const streetNumber = splitAddy.splice(0,1)
      const result = splitAddy.slice(0,-2)
      const joinedResult = result.join(' ')
      streetNumArr.push(streetNumber)
      streetsArr.push(joinedResult)
      
    })
    const streetNum = streetNumArr.join(',')
    const streets = streetsArr.join(',')
    return `${zipcode}:${streets}/${streetNum}`
    
  }