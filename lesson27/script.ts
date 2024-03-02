
const sum6=(a:number,b:number,c=0)=>{
    return a+b+c;
}
console.log(sum6(3,2));
console.log(sum6(3,2,4));


const  sum7 = (x:number,y:number,z=false) => {
    if(z==false){
        return x+y;
    }
    return y-x;
}
console.log(sum7(10,5,true));