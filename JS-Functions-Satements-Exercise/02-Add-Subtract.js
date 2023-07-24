function sum(num1,num2){
    return num1 + num2;
}
function subtract(num1, num2, num3){
    return sum(num1,num2) - num3;
}
function solve(num1,num2,num3){
    console.log(subtract(num1,num2,num3));
}
solve(23,6,10);
solve(1,17,30);
solve(42,58,100);