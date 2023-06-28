((arr) => {
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= num / 2; i++) 
      {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) 
    {
      if (isPrime(arr[i])) 
      {
        primeNumbers.push(arr[i]);
      }
    }
  
    console.log(primeNumbers);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  