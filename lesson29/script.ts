function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: any, y: any): any {
    return x + y;
}

console.log(add(5, 10));    // Kết quả: 15
console.log(add("Hello ", "world"));    // Kết quả: Hello world

class Product {
    constructor(public name: string, public price: number) {}
}

function displayProduct(product: Product): void;
function displayProduct(name: string, price: number): void;
function displayProduct(arg1: string | Product, arg2?: number): void {
    if (typeof arg1 === 'string') {
        console.log(`Name: ${arg1}, Price: ${arg2}`);
    } else {
        console.log(`Name: ${arg1.name}, Price: ${arg1.price}`);
    }
}

const product1 = new Product('Laptop', 1000);
displayProduct(product1); // Kết quả: Name: Laptop, Price: 1000
displayProduct('Phone', 500); // Kết quả: Name: Phone, Price: 500
