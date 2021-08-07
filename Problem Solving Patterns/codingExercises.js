function sameFrequency(num1, num2) {
    let numString1 = num1.toString()
    let numString2 = num2.toString()
    if (numString1.length !== numString2.length) return false;
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


    function areThereDuplicates(...args) {
        args.sort((a,b) => a > b);
        let lookupObj = {}
        for (var i = 0; i < args.length; i++){
          let asset = args[i]
          if (lookupObj[asset]){
            return true
          } else {
            lookupObj[asset] = 1;
          }
        }
        return false;
      }


      function averagePair(arr, num){
        let left = 0
          let right = arr.length - 1;
          while (left < right) {
            let avg = (arr[left] + arr[right])/2;
            if (avg === num){
              return true;
            } else if (avg < num){
              left ++;
            } else {
              right --;
            }
          }
        return false;
        }
        
        // averagePair([1,2,3], 2.5) // true
        // averagePair([1,3,3,5,6,7,10,12,19], 8) // true
        averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false

        /// ooof i really don't get these kind of multiple pointers

        unction isSubsequence(str1, str2) {
            var i = 0;
            var j = 0;
            if (!str1) return true;
            while (j < str2.length) {
              if (str2[j] === str1[i]) i++;
              if (i === str1.length) return true;
              j++;
            }
            return false;
          }
          
          isSubsequence('hello', 'hello world') // true
          // isSubsequence('abc', 'abracadabra') // true
          // isSubsequence('abc', 'acb') // false
          
          
          