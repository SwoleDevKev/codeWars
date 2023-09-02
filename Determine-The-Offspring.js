// Instructions
/*
If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/

// Answer

function chromosomeCheck(sperm) {
    return (sperm[1] == "Y") ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
  }