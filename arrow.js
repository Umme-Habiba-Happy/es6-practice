// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }
//single parameter no bracket
const doubleIt = num => num * 2;
//double parameter bracket
const multiply = (x, y) => x * y;
//give any number
const give4 = () => 4;
const result = give4();
// console.log(result);

// const result = multiply(2,3);
// console.log(result);


const doMath = (x,y) => {
    const sum = x+y;
    const difference = x-y;
    const result = sum * difference;
    return result;
}
const result3 = doMath(8,5);
console.log(result3)