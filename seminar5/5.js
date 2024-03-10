"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

function makeObjectFromArrays(keyArray, valueArray) {
  const result = {};
  keyArray.forEach((value, index) => {
    result[value] = valueArray[index];
  });
  return result;
}

function getStringFromObject(yourObject) {
  let result = ``;
  Object.keys(yourObject).forEach((key) => {
    result += `${key}: ${yourObject[key]}\n`;
  });
  return result;
}

function showTask5() {
  console.log(`ЗАДАНИЕ 5
${getStringFromObject(makeObjectFromArrays(en, ru))}`);
}
