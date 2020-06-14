'use strict';

// .count
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// .count alert
let checkCount = personalMovieDB.count;
function detectPersonalLevel() {
    if (checkCount > 0 && checkCount < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (checkCount >= 10 && checkCount <= 30) {
        alert('Вы классический зритель');
    } else if (checkCount > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }    
}
// detectPersonalLevel();

// .movies
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
    
        if (a != null && a != '' && a.length != 50 && b != null && b != '' && a.length != 50) {
            personalMovieDB.movies[a] = b;  
            console.log('done');  
        } else {
            i--;   
            console.log('error');
        }
    }    
}
// rememberMyFilms();

// questions favorite genres
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`, '');
    }
}
writeYourGenres();

// .privat check
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);