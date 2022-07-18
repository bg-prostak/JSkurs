/*jshint globalstrict:true */
"use strict";
// alert("hello"); // всплывающее окно
// const result = confirm("Are you here?"); // Вариванты ответа true or false

// const answer = prompt("Вам есть 18?", "18");// 18 это placeholder, тип данных - строка
// console.log(typeof(answer));


const answers = [];
answers[0] = prompt('Как ваще имя?' , '');
answers[1] = +prompt('Сколько вам лет?' , '');
answers[2] = prompt('Кто вы по жизни?' , '');

document.write(answers);