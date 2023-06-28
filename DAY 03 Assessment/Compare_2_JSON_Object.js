const obj1 = {name:"Person 1",age:5};
const obj2 = {age:5, name:"Person 1"};
function compareJSON(json1, json2) 
{
  let check;
  if(Object.keys(obj1).length != Object.keys(obj2).length) 
  {
    return false;
  }
  
  for(let key in obj1) 
  {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) 
    {
      return false;
    }
  }
  for(let key in obj2) 
    {
     if(!obj1.hasOwnProperty(key) || obj2[key] !== obj1[key]) 
        {
         return false;
        }
    }
 return true;
}
if(compareJSON(obj1, obj2))
{
    console.log("Given 2 Objects are Same!");
}
else
{
    console.log("Given 2 Objects are Not Same!");
}