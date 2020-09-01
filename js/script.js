'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.detectPersonalLevel();
    },
    detectPersonalLevel: function () {
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
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');
        
            if (a != null && a != '' && a.length != 50 && b != null && b != '' && a.length != 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }    
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {

            let genre = prompt(`Напишите Ваши любимые жанры через запятую и пробел`, '').toLowerCase();
            if (genre === "" || genre == null) {
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);