import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from "react-router-dom";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../../utils/constants"

export default function MoviesCardList({ movies, saveMovie, onDelete, moviesSaved }) {
    const location = useLocation();
    const [startCard, setSartCard] = React.useState(0);
    const movieCards = movies.slice(0, startCard);

    // Сравнение фильмов и проверка на лайк
    function getSavedMovieCard(movie) {
        return moviesSaved.find(savedMovie => savedMovie.id === movie.id)
    };

    function showsnumberList() {
        if (window.innerWidth < TABLET_WIDTH) {
            return setSartCard(5)
        } if (window.innerWidth >= TABLET_WIDTH && window.innerWidth <= DESKTOP_WIDTH) {
            return setSartCard(8)
        } if (window.innerWidth > DESKTOP_WIDTH) {
            return setSartCard(12)
        }
    }

    React.useEffect(() => {
        showsnumberList()
    }, [])

    function handleMore() {
        if (window.innerWidth < TABLET_WIDTH) {
            return setSartCard(startCard + 1)
        } if (window.innerWidth >= TABLET_WIDTH && window.innerWidth <= DESKTOP_WIDTH) {
            return setSartCard(startCard + 2)
        } if (window.innerWidth > DESKTOP_WIDTH) {
            return setSartCard(startCard + 3)
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
                    <MoviesCard saved={getSavedMovieCard(movie)} key={movie.id} movie={movie} saveMovie={saveMovie} onDelete={onDelete} />
                ))}
            </ul>
            <div className="button__container">
                <button onClick={handleMore} className={`${location.pathname === "/movies" || "/saved-movies" ? "movies__more-films" : "movies__more-films-none"} ${hideButton() ? "movies__more-films-none" : ""}`}>Ещё</button>
            </div>
        </section >

    )
}