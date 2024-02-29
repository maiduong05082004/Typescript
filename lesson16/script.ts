type ericType = number|string;
function addNumberOrString1 (a:ericType,b:ericType){
    if(typeof a === 'number' && typeof b === 'number'){
        return  a+b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(addNumberOrString1(6,4));
console.log(addNumberOrString1("Ngọc"," Thư"));
console.log(addNumberOrString1("Ngọc",4));