//10.3. Логический тип и ветвление

//Задание2

let x = 0

if (x === Number || String || Boolean) {
    console.log ("x = " + typeof x)
} else {
    console.log ("Тип x не определен")
}