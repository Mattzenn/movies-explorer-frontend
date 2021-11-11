import './SavedMovies.css'

import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies() {
    const savedmovies = [
        {
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/58a86807-b6e2-45dc-8780-c38f24e6a4ea/600x900",
            title: "Название Фильма",
            time: "1ч 42м",
            _id: 1,
            like: true,
        },
        {
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1af351fb-a961-4a52-8e4b-d9f0d740a1bf/600x900",
            title: "Название Фильма",
            time: "1ч 42м",
            _id: 2,
            like: false,
        },
        {
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1f270385-327f-4084-aea4-bdfd1f7c4ac1/576x",
            title: "Название Фильма",
            time: "1ч 42м",
            _id: 3,
            like: false,
        },
        {
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/58a86807-b6e2-45dc-8780-c38f24e6a4ea/600x900",
            title: "Название Фильма",
            time: "1ч 42м",
            _id: 4,
            like: false,
        },
        {
            image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1af351fb-a961-4a52-8e4b-d9f0d740a1bf/600x900",
            title: "Название Фильма",
            time: "1ч 42м",
            _id: 5,
            like: true,
        }
    ]

    return (
        <section className="movies">
            <MoviesCardList movies={savedmovies} />
            <button className="movies__more-films">Ещё</button>
        </section>
    )
}

export default SavedMovies;