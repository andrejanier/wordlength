function findMinLengthOfThreeWords(word1, word2, word3) {
    //If word3 is less than word2,
      //If word1 is less than word3, then return word1 length
      //Else return word3 length
      
    //Else now that word2 is less than word3...
      //If word2 is less than word1, then return word2 length
      //Else return word1 length
      
      if (word3.length < word2.length) {
        if (word1.length < word3.length ) {
          return word1.length;
        }
        else {return word3.length;}
      }
      
      else if (word2.length < word3.length) {
        if (word2.length < word1.length) {
          return word2.length;
        }
        else {return word1.length;}
      }
  }
  
  console.log(findMinLengthOfThreeWords('asb', 'ba', 'seed'));