(function(arr) {
  for (var i = 0; i < arr.length; i++) 
  {
    var num = arr[i];
    if (num % 2 !== 0) 
    {
      console.log(num);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);