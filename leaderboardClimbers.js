// Instructions

/*
In this kata you will be given a leaderboard of unique names for example:

['John',
 'Brian',
 'Jim',
 'Dave',
 'Fred']
Then you will be given a list of strings for example:

['Dave +1', 'Fred +4', 'Brian -1']
Then you sort the leaderboard.

Then once you have done this you need to return the leaderboard.

All inputs will be valid. All strings in the second list will never ask to move a name up higher or lower than possible eg. "John +3" could not be added to the end of the second input list in the example above.

The strings in the second list will always be something in the leaderboard followed by a space and a + or - sign followed by a number.

*/

// Answer 

function leaderboardSort(leaderboard, changes) {
  
  
    for(let i=0 ; i<changes.length; i++){
        
     const [name, change] = changes[i].split(' ')
     const currentIdx = leaderboard.indexOf(name)
     const sign = change.slice(0,1) 
     const changeNum = Number(change.slice(1))
     const newIdx = sign == '+' ? currentIdx - changeNum : currentIdx + changeNum
    
    leaderboard.splice(currentIdx,1)
    leaderboard.splice(newIdx,0,name)
    }

}