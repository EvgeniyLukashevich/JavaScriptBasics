"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log("\nЗАДАНИЕ 3");

function generateArray(elementsCount, minValue, maxValue) {
  const resultArray = [];
  for (let i = 0; i < elementsCount; i++) {
    const value = Math.floor(
      Math.random() * (maxValue - minValue + 1) + minValue
    );
    resultArray.push(value);
  }
  return resultArray;
}

function sumArray(yourArray) {
  let result = yourArray[0];
  for (let i = 1; i < yourArray.length; i++) {
    result += yourArray[i];
  }
  return result;
}

function lookForMinValue(yourArray) {
  let result = yourArray[0];
  for (let i = 1; i < yourArray.length; i++) {
    result = result < yourArray[i] ? result : yourArray[i];
  }
  return result;
}

function lookForIndexesByValue(yourArray, value) {
  const result = [];
  for (let i = 0; i < yourArray.length; i++) {
    if (yourArray[i] === value) {
      result.push(i);
    }
  }
  return result;
}

const arrayOrigin = generateArray(5, 0, 9);
console.log(`Исходный массив: [${arrayOrigin}]
Сумма элементов массива: ${sumArray(arrayOrigin)}
Минимальное значение элемента массива: ${lookForMinValue(arrayOrigin)}
Массив индексов элементов исходного массива со значением 3: [${lookForIndexesByValue(
  arrayOrigin,
  3
)}]`);
