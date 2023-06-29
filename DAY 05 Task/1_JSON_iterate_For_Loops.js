var jsonData = [
  { "name": "John", "age": 30, "city": "New York" },
  { "name": "Jane", "age": 25, "city": "London" },
  { "name": "Mark", "age": 35, "city": "Paris" }
];

console.log("1. for loop:");

for (var i = 0; i < jsonData.length; i++) 
{
  console.log("Name: " + jsonData[i].name + ", Age: " + jsonData[i].age + ", City: " + jsonData[i].city);
}

console.log();

console.log("2. for...in loop:");
for (var i in jsonData) 
{
  console.log("Name: " + jsonData[i].name + ", Age: " + jsonData[i].age + ", City: " + jsonData[i].city);
}
console.log();

console.log("3. for...of loop:");
for (var person of jsonData) 
{
  console.log("Name: " + person.name + ", Age: " + person.age + ", City: " + person.city);
}
console.log();

console.log("4. forEach loop:");
jsonData.forEach(function(person) 
{
  console.log("Name: " + person.name + ", Age: " + person.age + ", City: " + person.city);
});
