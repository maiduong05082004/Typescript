abstract class Human{
    constructor(public _name:string,public age:number,public gender:string){
    }
    abstract getHuman():string;
    get name():string{
        return this._name;
    }
    getinformation():string{
        return `Tên là:${this._name} ,Tuổi :${this.age} ,Giới tính :${this.gender}`;
    }
}

class  Student extends Human {
    constructor(_name:string,age:number,gender:string,public school: string) {
        super(_name,age,gender);
    }
    getHuman(): string {
        return `Tên là:${this._name} ,Tuổi :${this.age} ,Giới tính :${this.gender} ,Trường học :${this.school}`;
    }
}

let student1=new Student("Mai Dương",20,"nam","FPT");
console.log(student1.getHuman());