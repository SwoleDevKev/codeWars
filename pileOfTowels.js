//Instructions

/*
You are given an initial pile of towels as a sequence of the strings "red" and "blue". On top of that, you receive a sequence of non-negative integers. The first integer describes the number of used towels t in the first week, the second integer describes the number of used towels t in the second week and so forth.

My question is: How will my pile of towels look like in the end, if I use t towels every week and place them on top of the the pile according to the rule defined above?



*/



//Answer
function sortThePile(pileOfTowels, weeklyUsedTowels) {
    for (let i=0; i< weeklyUsedTowels.length; i++){
     let washed = pileOfTowels.splice( pileOfTowels.length - weeklyUsedTowels[i], weeklyUsedTowels[i] )
     let sortedPile = washed.sort().reverse()
       pileOfTowels.push(...sortedPile)
    
    }
    return pileOfTowels;
  }