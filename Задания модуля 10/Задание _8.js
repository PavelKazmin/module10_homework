// 10.7. Ассоциативные массивы

//Задание 8

let myMap = new Map();
myMap.set('Имя', 'Вася');
myMap.set('Фамилия', 'Пупкин');
myMap.set('Возраст', 32);
myMap.set('Город', 'Вышний Низинск');

for (let keyValue of myMap.entries()) {
	console.log(`Ключ - ${keyValue[0]}, Значение - ${keyValue[1]}`);
}
