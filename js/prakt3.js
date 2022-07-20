/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {} ,
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i =0; i<numberOfFilms; i++ ){
    const film = prompt('Какой фильм вы посмотрели?' , '') 
    if (film.length>=10 || film == null ){
        console.log("Введите корректное название");
        i--;
        continue;
        
    }
    const number = prompt('На сколько оцените его?', '')
    personalMovieDB.movies[film]=number;
}
}
rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Мало");
    } else {if(personalMovieDB.count < 30){
        console.log("Средне");
    }else {console.log("Много");}}
}
detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    console.log(personalMovieDB.genres);
    for(let i=0; i<3; i++){
        const genre = prompt(`Ваш любимый жанр № ${i+1}: `,'');
        personalMovieDB.genres[i]=genre;
    }
}
showMyDB();
writeYourGenres();
