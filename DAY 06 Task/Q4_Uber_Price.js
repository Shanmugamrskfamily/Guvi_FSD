class Uber 
{
    constructor(km, unit_price) 
    {
      this.km = km;
      this.unit_price = unit_price;
      this.taxi_fare = this.km * this.unit_price;
    }
  
    get_taxi_fare() 
    {
      return this.taxi_fare;
    }
  }
  
  let data = new Uber(20, 25);
  
  console.log(`Your Total Uber Fare is: ${data.get_taxi_fare()}`);
  