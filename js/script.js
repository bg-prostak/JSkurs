/*jshint globalstrict:true */
"use strict";
// alert("hello"); // всплывающее окно
// const result = confirm("Are you here?"); // Вариванты ответа true or false

// const answer = prompt("Вам есть 18?", "18");// 18 это placeholder, тип данных - строка
// console.log(typeof(answer));


function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}
function second(){
    console.log(2);
}
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJS('Javascript', function(){
    console.log('Я прошел этот урок!')});
let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {   // прототип
    health: 400,
    armor:100
};


const jonh = Object.create(soldier);