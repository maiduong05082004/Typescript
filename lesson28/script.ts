function getTotal(...numbers:number[]):number{
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
}
console.log(getTotal(1,2,3,4,5,6,7,8,9,10));
console.log(getTotal(1,2,3));

function phepNhan(n:number,...m:number[]){
return m.map((x)=>n*x);
}

console.log(phepNhan(2,3,4,5,60));

function noiChuoi(first:string,...last:string[]){
    return first+" "+last.join(',');
}
console.log(noiChuoi("có","con voi","con cá","con chim"));
