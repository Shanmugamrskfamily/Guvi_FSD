(function(arr) {
    
    function isPalindrome(str) 
    {
      var reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    }
  
    var palindromes = [];
    
    for (var i = 0; i < arr.length; i++) 
    {
      if (isPalindrome(arr[i])) 
      {
        palindromes.push(arr[i]);
      }
    }
  
    console.log(palindromes);
  })(["leveL", "hello", "racecar", "world", "malayalam"]);
  