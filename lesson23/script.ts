for (let i=0;i<9;i++){
    if(i%2==1){
        continue;
    }
    console.log(`số được hiển thị ${i}`);
}

let count=9;
let  num = 0;
do{
    count++;
    if(count%2){
        continue;
    }
    num++;
}while(count<99);
console.log(num,count);