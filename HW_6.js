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
    if(strPal.length > 0)
    {
        for(let start = 0, end = strPal.length - 1; start < end; start++, end--)
        {
            if(strPal[start] !== strPal[end])
            {
                 return false;
            }
        }      
        return true;
    }
    else
    {
        return false;
    }
}
console.log(`Check: ${palindromString('')}`);
console.log(`Check: ${palindromString('asdfdsa')}`);

//Задание 3
function stringToNumber(str, num = 10) //num для доп вопроса
{
    let result = 0;
    for(let i = 0; i < str.length; i++) 
    {
        // 1 метод
        let digit = str[i] | 0;
        result += digit * 10 ** (str.length - i - 1);
        // 2 метод
        digit = str[i] %  10; 
        result = result * num + digit; // для свободной системы счисления будет нужен num
    }
    return result;
}
console.log(`Число: ${stringToNumber('58')}`);  
console.log(`Число: ${stringToNumber('25', 2)}`); 
console.log(`Число: ${stringToNumber('525', 6)}`);  
console.log(`Число: ${stringToNumber('101', 8)}`);  
