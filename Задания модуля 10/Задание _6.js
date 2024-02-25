// 10.6. Циклы

//Задание 6

let arr = [1, 1, 1, 1, 34];

let check = arr.every(function(item) {
	if (item == 1) {
		return true;
	} else {
		return false;
	}
});

console.log(check);
