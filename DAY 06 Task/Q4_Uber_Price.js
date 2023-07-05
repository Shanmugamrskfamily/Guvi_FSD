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
  console.log(`Uber Price Per K.M: ${data.unit_price}
Total K.M of your Trip: ${data.km}
Your Total Uber Fare is: ${data.get_taxi_fare()}`);
  