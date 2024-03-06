class Human{
    public name:string;
    public age:number;
    public gender:string;
    constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    get information (){
        return `Tên: ${this.name} ,Tuổi: ${this.age},Giới tính: ${this.gender}`; 
    }
    describe():string{
        return `Đây là dữ liệu của lớp cha`;
    }
}

class  Student extends Human {
    public school:string;
    constructor(name:string, age:number, gender:string, school:string) {
        super(name,age,gender);
        this.school=school;
    }
    describe():string{
        return `Ghi đè lên function trùng tên của class cha - muốn đè lên ta dùng super: ${super.describe()}` ;
    }
}

let student1=new Student('Mai Dương',20,'nam','FPT');
console.log(student1.information);
console.log(student1.describe());