//10.4. Строки. Числа.

//Задание 3
let strReverse = "Hello",
    result = strReverse.split("").reverse().join('');  

console.log(result)

// или

function strRev(str) {
    let inArray = str.split("");
    let arrayReverse = inArray.reverse();
    let joinArray = arrayReverse.join("");
    return joinArray
} 

let stringReverse = "Тоже " + strRev("Hello")

console.log(stringReverse)


  







