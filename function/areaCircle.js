function Circle(radius) {
    return {
        radius,
        get area() {
            return Math.PI * this.radius * this.radius;
        } 
    }
}

const circle1 = new Circle(2);
console.log(circle1.radius, circle1.area);
