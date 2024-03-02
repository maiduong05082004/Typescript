//nếu bạn ko muốn chuyền vào c và muốn cho nó thành underfine thì bạn có thể thêm dấu ? ở sau biến đó
const sum5=(a:number,b:number,c?:number)=>{
    if(c) return a+b+c;
    return a+b;
}