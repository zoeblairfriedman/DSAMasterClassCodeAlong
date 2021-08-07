function validAnagram(str1, str2){
  if (str1.length !== str2.length){
    return false
  }

  let lookupObj = {};

  for (var i = 0; i < str1.length; i++){
    let letter = str1[i];
    lookupObj[letter] ? lookupObj[letter] += 1 : lookupObj[letter] = 1;
  }

  for (var i = 0; i < str2.length; i++){
    let letter = str2[i]
    if (!lookupObj[letter]){
      return false
    } else {
      lookupObj[letter]-=1;
    }
  }
  return true;
}

validAnagram('anagram', 'aggnram')

