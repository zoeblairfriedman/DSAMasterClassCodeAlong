
function validatePassword(string) {
  const vowels = ["a", "e", "i", "o", "u"]
  let acceptable = false;
  let i = 0;
  let j = 1;
  let k = 2;

  const vowelChecker = (char) => {
    return vowels.includes(char) ? true : false
  }

  while (i < string.length) {
    if (vowelChecker(string[i])) acceptable = true;
    if (string[i] === string[j] && string[i] !== ("e" || "o")) {
      acceptable = false;
      break;
    }
    if ((k < string.length) && (vowelChecker(string[i]) == vowelChecker(string[j])) && (vowelChecker(string[i]) == vowelChecker(string[k]))) {
      acceptable = false;
      break;
    }
    i++;
    j++;
    k++;
  }

  if (!acceptable){
    console.log(`<${string}> is not acceptable.`)
  } else {
    console.log(`<${string}> is acceptable.`)
  }

}


validatePassword("a");
validatePassword("tv"); 
validatePassword("ptoui"); 
validatePassword("bontres");
validatePassword("zoggax");
validatePassword("wiinq"); 
validatePassword("eep"); 
validatePassword("houctuh"); 

/*
OUTPUT:

validatePassword("a");
validatePassword("tv"); 
validatePassword("ptoui"); 
validatePassword("bontres");
validatePassword("zoggax");
validatePassword("wiinq"); 
validatePassword("eep"); 
validatePassword("houctuh"); 

*/

