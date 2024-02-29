let myArr1=["hello World",95];
//chúng ta có thể để tự định dạng nếu không biết được mảng sẽ chứa những dữ liệu gì nhưng điều đó là không nên
//chúng ta nên định dạng và cấu hình luôn cho mảng đó sẽ chứa những kiểu dữ liệu gì
let myArr2:(string|number)[]=["hello World",95];

console.log(myArr1);
console.log(myArr2);