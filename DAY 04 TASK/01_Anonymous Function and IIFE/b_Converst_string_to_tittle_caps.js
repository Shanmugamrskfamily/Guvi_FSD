(function(arr) {
    var titleCapsArray = [];
    
    for (var i = 0; i < arr.length; i++) 
    {
      var str = arr[i];
      titleCapsArray.push(str.charAt(0).toUpperCase() + str.slice(1));
    }
    
    console.log(titleCapsArray);
  })(["india", "asia", "tamil nadu"]);  