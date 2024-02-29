const sumNumber=(x:number,y:number):number=>{
    return x+y;
}
const sum46 = sumNumber(4,7);
console.log(sum46) 
console.log(sumNumber(5,10));
const handlelogs =( message:string):void=>{
    console.log(`dữ liệu của message ${message}`);
}
//với các hàm không trả về giá trị thì không cần thêm vào console.log
handlelogs(`thanh toán thành công`);