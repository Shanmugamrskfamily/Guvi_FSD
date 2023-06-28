((arr) => {
    const isPalindrome = (str) => {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    };
  
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) 
    {
      if (isPalindrome(arr[i])) 
      {
        palindromes.push(arr[i]);
      }
    }
  
    console.log(palindromes);
  })(["level", "hello", "racecar", "world", "malayalam"]);
  