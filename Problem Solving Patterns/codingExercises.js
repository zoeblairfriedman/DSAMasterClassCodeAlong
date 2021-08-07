function sameFrequency(num1, num2) {
    let numString1 = num1.toString()
    let numString2 = num2.toString()
    if (numString1.length !== numString2.length) { 
      return false;
      }
    let lookupObj = {}
    for (var i = 0; i < numString1.length; i++){
      let num = numString1[i]
      lookupObj[num] ? lookupObj[num] += 1 : lookupObj[num] = 1;
    }
    for (var i = 0; i < numString2.length; i++){
      let num = numString2[i]
      if (!lookupObj[num]){
        return false;
      } else {
        lookupObj[num] -= 1;
      }
    }  
    return true
    }
    
    // sameFrequency(182, 281) // true
    sameFrequency(34,14) // false