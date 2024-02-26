// 10.6. Циклы

//Задание 7

const arrEvenOdd = [18, 335, 876, 348, 12, 90, 465, 45, 78, 54, 3456, 1, 93, 8, 2];

let countEven = 0,
	countOdd = 0;
	countZeros= 0;

for (let i = 0; i < arrEvenOdd.length; i++) {
	if (arrEvenOdd[i] % 2 === 0) {
		countEven++;
	} else if (arrEvenOdd[i] % 2 !== 0) {
		countOdd++;
	} else if (arrEvenOdd[i] === 0) {
		countZeros++;
	}
}

console.log("Четных - " + countEven + "," + " Нечетных - " + countOdd + ", Нулевых элементов - " + countZeros);
