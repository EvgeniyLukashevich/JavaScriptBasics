"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const DAY_NUMBER = parseInt(prompt("Введите целое число в интервале [1, 32):"));
let decade;

if (!isNaN(DAY_NUMBER) && DAY_NUMBER >= 1 && DAY_NUMBER < 32) {
  decade = Math.ceil(DAY_NUMBER / 10);
  console.log(`Число ${DAY_NUMBER} попадает в ${decade} декаду месяца.`);
} else {
  console.log("Неверное значение");
}
