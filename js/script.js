'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

while (numberOfFilms < 1 || numberOfFilms < '' || numberOfFilms.length > 50) {
    numberOfFilms = 0;

    if (numberOfFilms !=  0){
        break;
    } else {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    switch (i) {
        case 0:
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');

            while (a < 1 || a < '' || a.length > 50) {
                    a = 0;

                    if (a !=  0){
                        break;
                    } else {
                        a = prompt('Один из последних просмотренных фильмов?', '');
                    }
            }
            while (b < 1 || b < '' || b.length > 50) {
                    b = 0;

                    if (b !=  0){
                        break;
                    } else {
                        b = +prompt('На сколько оцените его?', '');
                    }
            }

            personalMovieDB.movies[a] = b;
            break;

        case 1:
            let c = prompt('Один из последних просмотренных фильмов?', ''),
                d = +prompt('На сколько оцените его?', '');

            while (c < 1 || c < '' || c.length > 50) {
                    c = 0;

                    if (c !=  0){
                        break;
                    } else {
                        c = prompt('Один из последних просмотренных фильмов?', '');
                    }
            }
            while (d < 1 || d < '' || d.length > 50) {
                    d = 0;

                    if (d !=  0){
                        break;
                    } else {
                        d = +prompt('На сколько оцените его?', '');
                    }
            }

            personalMovieDB.movies[c] = d;
            break;
    
        default:
            break;
    }
}

console.log(personalMovieDB);

// Нельзя оставить ответ в виде пустой строки, его отменить, а так же ввести больше 50 символов!
// while (numberOfFilms < 1 || numberOfFilms < '' || numberOfFilms.length > 50) {
//     numberOfFilms = 0;

//     if (numberOfFilms !=  0){
//         break;
//     } else {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// for (let i = 0; i <= 1; i++) {
//     personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = +prompt('На сколько оцените его?', '');
// }



//------------------------ferst--------------


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);