let products=[
    {number:'phone',price:400},
    {number:'table',price:900},
    {number:'laptop',price:1200}  
];
for (let i = 0; i < products.length; i++) {
if(products[i].price==1200){
    break;
}    
console.log(products[i]);
}
