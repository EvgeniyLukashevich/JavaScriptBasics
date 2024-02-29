"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

// Решение в соответствии с условием:
const userNumber1 = Number.parseInt(prompt("Введите целое число: "));

function showNumberDigits1(number) {
  const hundreds = Math.floor((number / 100) % 10);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  console.log(
    `В числе ${number} - сотен: ${hundreds}; десятков: ${tens}; единиц: ${ones}`
  );
}

if (!Number.isNaN(userNumber1)) {
  showNumberDigits1(userNumber1);
} else {
  console.log("К сожалению, ввод некорректен.");
}

// Решение показывающее все разряды любого целого числа:
const userNumber2 = Number.parseInt(prompt("Ещё раз введите целое число: "));

function showNumberDigits2(number) {
  let message = `В числе ${number}`;
  const digitsCount = number.toString().length;
  for (let i = 0; i < digitsCount; i++) {
    message += `\nРазряд ${i + 1}: ${number % 10}`;
    number = Math.floor(number / 10);
  }
  console.log(message);
}

if (!Number.isNaN(userNumber2)) {
  showNumberDigits2(userNumber2);
} else {
  console.log("Некорректный ввод, увы");
}
