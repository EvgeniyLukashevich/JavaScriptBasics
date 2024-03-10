"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products2 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

function getStringFromArray(yourArray) {
  let result = ``;
  yourArray.forEach((product) => {
    result += `ID: ${product.id}, Цена: ${product.price}, Фотографии: ${
      product.photos && product.photos.length > 0
        ? product.photos.join(", ")
        : "фото отсутствует"
    }\n`;
  });
  return result;
}

function showTask4() {
  console.log(`ЗАДАНИЕ 4
Исходный массив: 
${getStringFromArray(products2)}
Массив объектов с фото:
${getStringFromArray(
  products2.filter((product) => product.photos && product.photos.length > 0)
)}
Отсортированный по цене объектов массив:
${getStringFromArray(products2.sort((a, b) => a.price - b.price))}`);
}
