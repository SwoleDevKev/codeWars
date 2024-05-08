// Instructions

/*
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

*/

//Answer


function planeSeat(a){
    if (a.length === 0 || a.length > 3){
      return 'No Seat!!'
    }
   const letter = a.slice(-1)
   const seatNumber = a.slice(0,-1)
   
    const resultArr = []
   switch (true){
       case seatNumber <=20 :
        resultArr.push('Front')
       break;
       case seatNumber <=40 && seatNumber >20 : 
       resultArr.push('Middle')
       break;
       case seatNumber <=60 && seatNumber >40:
       resultArr.push('Back')
       break;
   }
  
  
    switch (true){
        case letter.toLowerCase().charCodeAt() < 100 :
        resultArr.push('Left');
        break;
        case letter.toLowerCase().charCodeAt() >= 100 &&  letter.toLowerCase().charCodeAt() < 103 :
        resultArr.push('Middle');
        break;
        case letter.toLowerCase() === 'g' || letter.toLowerCase() === 'h' || letter.toLowerCase() === 'k':
        resultArr.push('Right');
        break;
    }
  
    if (!resultArr[0] || !resultArr[1] ){
          return 'No Seat!!'
    }
    return resultArr.join('-')
  }