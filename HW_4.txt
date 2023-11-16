                            Завдання 1
let number = prompt("Будь ласка, введіть число");

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("Non Divisible");
}

--------------------------------------------------------------------------------------
                             Завдання 2

let value = prompt("Будь ласка, введіть будь-яке значення");
let type;
//перевірка на  буліан
if (value.toLowerCase() === "false" || value.toLowerCase() === "true") {
  type = "boolean";
}
//перевірка на число
else if (!isNaN(value)) 
{
  type = "number";
} 
//Перевірка на різність типів
else 
{
  let words = value.split(" "); //Розбиваємо рядок на слова
  for (let word of words) //перебираємо слова
  {
    if (!isNaN(word) ||  word.toLowerCase() === "false" || word.toLowerCase() === "true") 
    {
      //Якщо введені дані різні за типом
      type = "complex";
      break;
    }
  }
  if (!type) 
   {
     //якщо type залишиться undefined (не було присвоєно значення)
     type = "string";
   }
}
//Вивід результатів
switch (type) {
  case "boolean":
    console.log("You entered a boolean");
    break;
  case "number":
    console.log("You entered a number");
    break;
  case "string":
    console.log("You entered a string");
    break;
  case "complex":
    console.log("You entered a complex data");
    break;
  default:
    console.log("You entered a complex data");
}
