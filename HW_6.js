function searchMinValue(data)
{
    let minValue = data[0];
    if(data.length === 0) 
    {
       return null;
    }
    for(let i = 0; i < data.length; i ++) 
    {
        if(minValue > data[i])//если нужно найти большее число поменять знак на <
        {
            minValue = data[i];
        }
    }
    return minValue;
}
console.log(`Минимальное: ${searchMinValue([5, 5, 6, 7, -5, -12, 45])}`);
console.log(`Минимальное: ${searchMinValue([])}`);

//Задание 2
function palindromString(strPal)
{
    let check = false;
    for(let start = 0, end = strPal.length - 1; start < end; start++, end--)
    {
        check = true;
        if(strPal[start] !== strPal[end])
        {
           return false;
        }
    }
    return check;
}
console.log(`Check: ${palindromString('')}`);
console.log(`Check: ${palindromString('asdfdsa')}`);

//Задание 3
function stringToNumber(str, num) //num для доп вопроса
{
    let result = 0;
    for(let i = 0; i < str.length; i++) 
    {
       // let digit = str[i] | 0;
        let digit = str[i] %  10; //Или
        result = result * 10 + digit;
        result = result * num + digit; //Дополнительный вопрос
    }
    return result;
}

console.log(`Число: ${stringToNumber('101', 2)}`); 
console.log(`Число: ${stringToNumber('525', 6)}`);  
console.log(`Число: ${stringToNumber('101', 8)}`);  
