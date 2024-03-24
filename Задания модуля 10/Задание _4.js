//10.4. Строки. Числа.

//Задание4
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let randomNum = randomInt(1, 100);

  console.log(randomNum);



const random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let result = random(0, 100);
console.log(result);
