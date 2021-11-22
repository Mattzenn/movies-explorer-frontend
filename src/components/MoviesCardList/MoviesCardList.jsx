import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from "react-router-dom";

export default function MoviesCardList({ movies, saveMovie, onDelete, moviesSaved }) {
    const location = useLocation();
    const [startCard, setSartCard] = React.useState(0);
    const movieCards = movies.slice(0, startCard);

    console.log(moviesSaved)
    // Сравнение фильмов и проверка на лайк
    function getSavedMovieCard(moviesSaved, movie) {
        console.log(moviesSaved)
        console.log(movie.id)
        return moviesSaved.find(savedMovie => savedMovie.id === movie.id)
    };

    function showsnumberList() {
        if (window.innerWidth < 768) {
            return setSartCard(5)
        } if (window.innerWidth >= 768 && window.innerWidth <= 1160) {
            return setSartCard(8)
        } if (window.innerWidth > 1160) {
            return setSartCard(12)
        }
    }

    React.useEffect(() => {
        showsnumberList()
    }, [])

    function handleMore() {
        if (window.innerWidth < 768) {
            return setSartCard(startCard + 1)
        } if (window.innerWidth >= 768 && window.innerWidth <= 1160) {
            return setSartCard(startCard + 2)
        } if (window.innerWidth > 1160) {
            return setSartCard(startCard + 4)
        }
    }

    function hideButton() {
        if (movieCards.length === movies.length) {
            return true
        } else {
            return false
        }
    }


    return (
        <section className="items">
            <ul className="movies__cardlist">
                {movieCards.map((movie) => (
                    <MoviesCard saved={getSavedMovieCard(moviesSaved, movie)} key={movie._id} movie={movie} saveMovie={saveMovie} onDelete={onDelete} />
                ))}
            </ul>
            <div className="button__container">
                <button onClick={handleMore} className={`${location.pathname === "/movies" || "/saved-movies" ? "movies__more-films" : "movies__more-films-none"} ${hideButton() ? "movies__more-films-none" : ""}`}>Ещё</button>
            </div>
        </section >

    )
}