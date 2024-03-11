"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

function showTask2() {
  console.log(`ЗАДАНИЕ 2
Автор: ${post.author}
Комментарий 1, кол-во дизлайков: ${post.comments[0].rating.dislikes}
Комментарий 2, id пользователя: ${post.comments[1].userId}
Комментарий 2, текст: ${post.comments[1].text}`);
}
