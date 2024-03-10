"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products1 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

function showTask3() {
  let message = `ЗАДАНИЕ 3\n`;
  products1.forEach((product) => {
    message += `id${product.id} Исходная цена: ${product.price}\n`;
    product.price = Number.parseFloat((product.price * 0.85).toFixed(2));
    message += `id${product.id} Новая цена:    ${product.price}\n`;
  });
  console.log(message);
}
