const getInfoProduct = async () => {
    const param = new URLSearchParams(location.search);
    const productId = param.get("id");

    const response = await fetch('http://localhost:3000/product');
    const products = await response.json();
    const product = products.find((product:any) => product.id === productId);
    
    // console.log(product);
    //đổ dữ liệu vào thẻ input
    const id = document.getElementById('id') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const price = document.getElementById('price') as HTMLInputElement;
    if(id && name && price){
        id.value = product.id
        name.value = product.name
        price.value = product.price
    }
   
};
getInfoProduct();

const updateProduct = (event: any) => {
    event.preventDefault();
    const id: any = document.querySelector('input[name="id"]');
    const name: any = document.querySelector('input[name="name"]');
    const price: any = document.querySelector('input[name="price"]');
    const ProductEdit: any = ({
        id: id.value,
        name: name.value,
        price: price.value
    });
    alert("Sửa sản phẩm thành công");
    window.location.href = 'list_product.html';
    fetch(`http://localhost:3000/product/${id.value}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ProductEdit)
    });

}