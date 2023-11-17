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
let type = "string";
let words = value.split(" ");                             
for (let word of words) //перебираємо слова
{
  if (!isNaN(word) ||  word.toLowerCase() === "false" || word.toLowerCase() === "true") 
  {
    type = "complex";
    break;
  }
}  
  if (!isNaN(value)) 
  {
    type = "number";
  }
   else if (value.toLowerCase() === "false" || value.toLowerCase() === "true") 
   {
     type = "boolean";
   }                          
  console.log(`You entered a ${type}`);//если никакие условия не отработают то останеться string по умолчанию
                             