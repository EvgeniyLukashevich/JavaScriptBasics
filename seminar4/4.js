"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

// Функция вывода "односторонней" горки
function drawOneSideSlide(floorsCount, char) {
  for (let i = 1; i <= floorsCount; i++) {
    console.log(`${char.repeat(i)}`);
  }
}

// Функция вывода "двусторонней" горки
function drawBothSideSlide(floorsCount, char) {
  for (let i = 1; i <= floorsCount; i++) {
    let spaces = " ".repeat(floorsCount - i);
    let stars = char.repeat(i * 2 - 1);
    console.log(spaces + stars + spaces);
  }
}

console.log('\nЗАДАНИЕ 4. "Односторонняя" горка');
drawOneSideSlide(20, "x");

console.log('\nЗАДАНИЕ 4. "Двусторонняя" горка');
drawBothSideSlide(20, "x");
