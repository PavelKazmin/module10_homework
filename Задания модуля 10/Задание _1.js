//10.3. Логический тип и ветвление

//Задание 1

const enterValue = +prompt("Пожалуйста введите число", "0")

if (isNaN(enterValue)) {
    console.log('Упс, кажется, вы ошиблись')
} else if (enterValue % 2 === 0) {
    console.log('Число четное')
} else {
    console.log('Число нечетное')
}
