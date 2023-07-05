class Circle 
{
    constructor(radius, color) 
    {
      this.radius = radius;
      this.color = color;
    }
    getRadius()
    {
      return this.radius.toFixed(1);
    };
    setRadius(_radius)
    {
      this.radius = _radius;
    };
    getColor()
    {
        return this.color;
    };
    setColor(_color)
    {
        this.color=_color;
    };
    
    getArea()
    {
      return Math.PI*this.radius*this.radius;
    };
    getCircumference()
    {
      return 2* Math.PI*this.radius;
    };
  }
  
let cir = new Circle(1.0, "red");
console.log(`Radius of the Circle: ${cir.getRadius()}
Color of the Circle: ${cir.getColor()}
Area Of the circle: ${cir.getArea()}
Circumference of the Circle: ${cir.getCircumference()}`);