(function(arr1, arr2) {
    function getMedian(arr) 
    {
      var length = arr.length;
      var midIndex = Math.floor(length / 2);
      
      if (length % 2 === 0) 
      {
        return (arr[midIndex - 1] + arr[midIndex]) / 2;
      } else 
      {
        return arr[midIndex];
      }
    }
    
    var mergedArray = arr1.concat(arr2);
    var sortedArray = mergedArray.sort(function(a, b) {
      return a - b;
    });
    var median = getMedian(sortedArray);
    
    console.log(median);
  })([1, 3, 5], [2, 4, 6]);
  