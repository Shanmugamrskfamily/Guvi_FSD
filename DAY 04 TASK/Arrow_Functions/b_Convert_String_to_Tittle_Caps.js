((arr) => {
    const titleCapsArray = [];
    for (let i = 0; i < arr.length; i++) 
    {
      titleCapsArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    console.log(titleCapsArray);
  })(["india", "asia", "tamil nadu"]);
  