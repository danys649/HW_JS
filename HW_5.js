//задание 1
while (true) 
{
    let userInput = prompt("Введіть будь-яке число");
    let number = Number(userInput);
    if (isNaN(number)) 
    {
        alert("Only numbers, please");
    } 
    else if (number >= 123)
    {
        alert("Wow, you've ended this endless cycle!");
        break;
    } 
    else 
    {
        alert("Продовжуйте");
    }
}

while(true)
{
    let userInput = prompt("Введіть перше число");
    let numberOne = Number(userInput);
    userInput = prompt("Введіть друге число");
    let numberTwo = Number(userInput);
    if (isNaN(numberOne) && isNaN(numberOne)) 
    {
        alert("Only numbers, please");
    } 
    if(numberOne !== numberTwo)
    {
        break;
    }
}

//задание 2
let firstNumber = prompt("Введіть перше число");
firstNumber = Number(firstNumber);
let secondNumber = prompt("Введіть друге число");
secondNumber = Number(secondNumber);

while (isNaN(firstNumber) || isNaN(secondNumber)) 
{
    alert("Тільки числа, будь ласка");
    firstNumber = prompt("Введіть перше число");
    firstNumber = Number(firstNumber);
    secondNumber = prompt("Введіть друге число");
    secondNumber = Number(secondNumber);
}
let start = Math.min(firstNumber, secondNumber);
let end = Math.max(firstNumber, secondNumber);
let sum = 0;
let product = 1;//если будет 0, то будет умножаться на этот 0 и будет добуток всегда 0
for (let i = start; i <= end; i++) 
{
    if (i % 2 === 0)
    {
        product *= i;
    } 
    else 
    {
        sum += i;
    }
}
alert(`Сума = ${sum}`);
alert(`Добуток = ${product}`);
