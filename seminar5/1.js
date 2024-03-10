"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

function selectLargerObjectValues(yourObject, requiredValue) {
  return Object.values(yourObject).filter((value) => value >= requiredValue);
}

function showTask1() {
  console.log(`ЗАДАНИЕ 1
Исходные значения: ${Object.values(numbers)}
Результат: ${selectLargerObjectValues(numbers, 3)}`);
}
