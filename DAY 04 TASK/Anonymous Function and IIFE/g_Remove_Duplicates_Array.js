(function(arr) {
    var uniqueArray = [];
    
    for (var i = 0; i < arr.length; i++) 
    {
      if (uniqueArray.indexOf(arr[i]) === -1) 
      {
        uniqueArray.push(arr[i]);
      }
    }
    
    console.log(uniqueArray);
  })([1, 2, 2, 3, 4, 4, 5]);
  