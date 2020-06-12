'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(typeof(numberOfFilms));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let checkCount = personalMovieDB.count;

if (checkCount > 0 && checkCount < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (checkCount >= 10 && checkCount <= 30) {
    alert('Вы классический зритель');
} else if (checkCount > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

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

console.log(personalMovieDB);
