function operate(a,b,callback){
    return callback(a,b);
}

function multiply(a,b){
    return a * b;
}

function divition(a,b){
    return a / b;
}

console.log("Multiplication: "+ operate(2,5, multiply));
console.log("Divition: "+ operate(100,5, divition));

