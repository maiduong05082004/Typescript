let counter=0;
while (counter<5){
    console.log('counter',counter);
    if(counter%3) {break;}
    counter++;
}

let printNumber=0;
while(printNumber<=10){
    console.log(`đếm số : ${printNumber}`);
    printNumber++;
}

let sum:number=0;
let number:number=0;
while(number<=100){
    sum+=number;
    number++;
}
console.log(sum);