const arry1 = [1,2,3];
const arry2 = [...arry1, 29,30];
console.log(arry2);

function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 2);
}

console.log(multiply(2, 4, 8)); // Output: 6
