//задание 1
let number;
do {
    let userInput = prompt("Введіть будь-яке число");
    number = Number(userInput);
    if (number >= 123) {
        alert("Wow, you've ended this endless cycle!");
        break;
    }
    alert('Should continue');
    if (isNaN(number)) 
    {
        alert("Only numbers, please");
    } 
    else if (number <= 123)
    {
        alert("Продовжуйте");
    }

} while (isNaN(number))


//задание 2
do {
    firstNumber = prompt("Введіть перше число");
    firstNumber = Number(firstNumber);
    secondNumber = prompt("Введіть друге число");
    secondNumber = Number(secondNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber))
     {
        alert('Only numbers, please');
    }
} while (isNaN(firstNumber) || isNaN(secondNumber))

let start;//меньшее
let end;//большее
if(firstNumber > secondNumber)
{
    start = secondNumber;
    end = firstNumber;
}
else
{
    end = secondNumber;
    start = firstNumber;
}
//let start = Math.min(firstNumber, secondNumber);
//let end = Math.max(firstNumber, secondNumber);
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
