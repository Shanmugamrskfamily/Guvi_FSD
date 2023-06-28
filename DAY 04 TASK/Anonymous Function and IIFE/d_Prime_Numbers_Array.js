(function(arr) {
    function isPrime(num) 
    {
      if (num <= 1) return false;
      for (var i = 2; i <= num / 2; i++)
      {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    var primeNumbers = [];
    
    for (var i = 0; i < arr.length; i++) 
    {
      if (isPrime(arr[i])) 
      {
        primeNumbers.push(arr[i]);
      }
    }
  
    console.log(primeNumbers);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  