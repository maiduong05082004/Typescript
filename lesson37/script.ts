interface InterfacePerson{
    firstName:string;
    lastName:string
}
function getFullName(person:InterfacePerson) {
    return `${person.firstName} ${person.lastName}`;
}
let person40={
    firstName:'Erick',
    lastName: 'Dương',
    address: '95 Tu Hoàng'
};
interface User {
    name: string;
    age?: number; // age không bắt buộc
    readonly gender:string;
  }
  

  function getUserInfo(user: User) {
    return `Name: ${user.name}, Age: ${user.age}`;
  }
  
  interface Person {
    name: string;
  }
  //Interface có thể kế thừa từ một hoặc nhiều interface khác, sử dụng từ khóa extends.
  interface User extends Person {
    id: number;
  }
  
  class Employee12 implements User {
    id: number;
    name: string;
    gender: string;
    constructor(id: number, name: string,gender:string) {
      this.id = id;
      this.name = name;
      this.gender=gender;
    }
  }