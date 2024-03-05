class Peson{
    ssn:string;
    name:string;
    age:number;
    constructor(ssn:string,name:string,age:number){
        this.ssn=ssn;
        this.name = name; 
        this.age = age;  
    }
    getFullaccount():string{
        return `${this.ssn} ,${this.name}`;
    }
}
let peson1=new Peson("12","Duong",18);
console.log(peson1);
console.log(peson1.getFullaccount());