class Circle{
    static pi:number=1.43;
    // public radius:number=30;
    static banKinh(radius:number){
        return this.pi*radius*radius;
    }
}

console.log(Circle.pi);
console.log(Circle.banKinh(10));