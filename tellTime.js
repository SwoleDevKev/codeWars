// INSTRUCTIONS

/* Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to an elaborate email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees

03:00 = 90 degrees

06:00 = 180 degrees

09:00 = 270 degrees

12:00 = 360 degrees

Notes
0 <= angle <= 360

Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07 */



// ANSWER


const whatTimeIsIt = function(angle) {
  
    let mins =  angle*2 < 10 ? `0${Math.floor(angle*2)}` : Math.floor(angle*2)
    
    if (angle < 30){
      return `12:${mins}`
    }
    if (angle%30 === 0){
      return angle/30 < 10 ? `0${angle/30}:00` : `${angle/30}:00`
    } 
    const hours = angle/30 <10 ? `0${Math.floor(angle/30)}` : Math.floor(angle/30)
    mins = angle%30*2 < 10 ? `0${Math.floor(angle%30*2)}` : Math.floor(angle%30*2)
   
    return `${hours}:${mins}`
  }