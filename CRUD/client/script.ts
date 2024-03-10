
interface IProduct {
    id: number;
    name: string;
    price: number;
}
class Product {
    data: Array<IProduct>;
    constructor() {
        this.data = [];
        this.fetchProducts();
    }
    async fetchProducts() {
        const response = await fetch("http://localhost:3000/product");
        const products = await response.json();
        this.data = products;
        this.showDataTable();
    }
    showDataTable() {
        let tr = '';
        let tbody: any = document.querySelector('tbody');
        tbody.innerHTML = '';
        // let id=document.querySelector('input[name="id"]');
        for (const key in this.data) {
            let product = this.data[key];
            tr += /*html*/ `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <a href="edit_product.html?id=${product.id}"><button class="btn btn-warning">Sửa</button></a>
                <button onclick="deleteProduct(${product.id},event)" class="btn btn-danger">Xóa</button>
            </td>
            </tr>`;
        }
        tbody.innerHTML = tr;
    }
}

var product = new Product();
product.showDataTable();
//thêm sản phẩm
const addProduct = async (event: any) => {
    event.preventDefault();
    //bắt dữ liệu từ form
    const id: any = document.querySelector('input[name="id"]');
    const name: any = document.querySelector('input[name="name"]');
    const price: any = document.querySelector('input[name="price"]');
    //bắt các thẻ để hiển thị lỗi
    let errorId: any = document.getElementById('errorId');
    let errorName: any = document.getElementById('errorName');
    let errorPrice: any = document.getElementById('errorPrice');
    let errors: any = [];
    if (id.value == "") {
        errors.push("Vui lòng nhập id sản phẩm");
        id.style.border = "1px solid red";
        errorId.textContent = `Vui lòng nhập id sản phẩm`;
    } else {
        id.style.border = "1px solid #ffffff";
        errorId.textContent = ``;
    }
    if (name.value == "") {
        errors.push("Vui lòng nhập tên sản phẩm");
        name.style.border = "1px solid red";
        errorName.textContent = "Vui lòng nhập tên sản phẩm";
    }
    else {
        name.style.border = "1px solid #ffffff";
        errorName.textContent = "";

    }
    if (price.value == "") {
        errors.push("Vui lòng nhập giá sản phẩm");
        price.style.border = "1px solid red";
        errorPrice.textContent = "Vui lòng nhập giá sản phẩm";
    }
    else {
        price.style.border = "1px solid #ffffff";
        errorPrice.textContent = "";
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    };
    const ProductNew: any = ({
        id: id.value,
        name: name.value,
        price: price.value
    });
    fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ProductNew)
    });
    product.showDataTable();
}
//xóa sản phẩm
const deleteProduct = (id: number, event: any) => {
    event.preventDefault();
    if (confirm("Bạn có muốn xóa sản phẩm này không")) {
        fetch(`http://localhost:3000/product/${id}`, {
            method: "DELETE"
        })
    }
}
