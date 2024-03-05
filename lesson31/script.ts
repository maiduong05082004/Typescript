class Employee{
    public nameStudent:string;
    public maSV:string;
    public email:string;
    private number:string;
    constructor(nameStudent:string,maSV:string,email:string,number:string){
        this.nameStudent=nameStudent;
        this.maSV= maSV;
        this.email=email;
        this.number=number;
    }
    }
let student=new Employee("Mai Đức Dương","PH40323","duongmdph40323@gmail.com","0865643858");
student.nameStudent="Ngọc Thư";
// khi dùng private thì không thể sửa đổi ở bên ngoài class
// student.number="08965566";
console.log(student);