//10.3. Логический тип и ветвление

//Задание2

(if-else)
let x = 0

if (x === Number || String || Boolean) {
    console.log ("x = " + typeof x)
} else {
    console.log ("Тип x не определен")
}

(switch)
 let x =[1, 2, 3, 3, 4, 4, 4, 4, 4];

switch (typeof x) {
    case 'number':
        console.log('x - число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    case 'boolean':
        console.log('x - логический тип');
        break;
    default:
        console.log('Тип x не определён');
        break;
}   
