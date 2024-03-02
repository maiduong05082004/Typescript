//nếu bạn ko muốn chuyền vào c và muốn cho nó thành underfine thì bạn có thể thêm dấu ? ở sau biến đó
const sum5=(a:number,b:number,c?:number)=>{
    if(c) return a+b+c;
    return a+b;
}
function greet(name: string, greeting?: string) {
    // Kiểm tra xem greeting có được cung cấp không
    if (greeting) {
      console.log(`${greeting}, ${name}!`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  // Gọi hàm với cả hai tham số
  greet("Alice", "Hi");
  
  // Gọi hàm chỉ với tham số bắt buộc
  greet("Bob");
  