class person
{
    constructor()
{
let data={name:"CHANDRU",age:26,
Qualification:"B.Sc Computer Science",
address:"No.38, Mettu Street, Chennai- 600 028"}
for(var key in data)
{
    console.log(`${data[key]}`);
}
}
}
let call=new person();