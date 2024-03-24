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


const arr = [true, 12, 'строка'];

let result = arr.every(function(item) {
   if (typeof item === 'string') {
      return true;
   }else{
      return false;
   }
});

console.log(result);
