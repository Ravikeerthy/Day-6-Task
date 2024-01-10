class circle{
    constructor(radius,color) {
        this.color = color;
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius= radius;
    }
    getcolor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    toString(){
        return `Circle - Radius: ${this.radius}, ${this.color}`;
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference(){
        return 2*Math.PI * this.radius;
    }
}

let res = new circle();
console.log(res.toString());

let res1 = new circle(2.5, "Green");
console.log("Updated Value: ", res1);

res1.setRadius(5.5);
res1.setColor("Blue");
console.log(res1.toString());

console.log(`Area of Circle: ${res1.getArea()}`);
console.log(`Area of Circumference: ${res1.getCircumference()}`);
