//gettter và setter

//khi chưa có gettter và setter
// class  Person {
//     public age:number;
//     public name:string;
//     public number:string;
//     constructor(age:number,name:string,number:string){
//     this.age=age;
//     this.name=name;
//     this.number=number;
//     }
//     getAge(){
//         return this.age;
//     }
//     editAge(ageNew:number){
//         if(ageNew<0||ageNew>150){
//             throw Error ("lỗi tuỗi không hợp lệ");
//         }
//         this.age=ageNew;
//     }
// }

// let peson=new  Person(23,"Mai Đức Dương","098765432");
// peson.editAge(30);
// console.log(`dữ liệu :${peson.getAge()}`)

class Person {
    private _age: number;
    public name: string;
    public number: string;

    constructor(age: number, name: string, number: string) {
        this._age = age;
        this.name = name;
        this.number = number;
    }
    get age() {
        return this._age;
    }

    set age(value: number) {
        if (value < 0 && value > 150) {
            throw new Error("lỗi tuổi không hợp lệ");
        } 
        this._age = value;
    }
}

let peson = new Person(22,"Nguyễn Hòa","098833242");
peson.age = 30;
console.log(`đây là tuổi mới của ${peson.name} :${peson.age}`);