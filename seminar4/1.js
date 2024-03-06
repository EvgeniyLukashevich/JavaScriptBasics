"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

console.log('ЗАДАНИЕ 1');

const iterationCount = 11;

const isEven = (num) => num % 2 === 0;

for (let i = 0; i <= iterationCount; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else {
    console.log(isEven(i) ? `${i} - четное число` : `${i} - нечетное число`);
  }
}
