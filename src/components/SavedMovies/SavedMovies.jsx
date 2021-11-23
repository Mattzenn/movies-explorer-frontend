import './SavedMovies.css'

import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies({ isBurger, onBurger, loggedIn, films, onDeleteCard, saveMovie }) {

    const [isinputvalue, setIsinputvalue] = React.useState('');
    const [isNewArr, setNewArr] = React.useState(films);
    const [isTextSearch, setIsTextSearch] = React.useState(true);

    const [isShort, setIsShort] = React.useState(false);

    const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < 40);

    function handleCheckbox(boolean) {
        setIsShort(boolean)
    }

    function handleKeyword(value) {
        setIsinputvalue(value)
    }

    function writeNewArr(searchArr) {
        setNewArr(searchArr)
    }

    function handleButton() {

        function findMovies(movie, keyword) {

            const res = movie.nameRU.toLowerCase().includes(keyword.toLowerCase())

            return res
        }

        setIsTextSearch(false);

        return films.filter((movie) => { return findMovies(movie, isinputvalue); })

    }

    function removeitem(_id) {
        const newMoviesList1 = isNewArr.filter((m) => {
            if (_id === m.id) {
                return false
            } else {
                return true
            }
        });
        setNewArr(newMoviesList1);
        onDeleteCard(_id)
    }

    function handleSubmit() {
        const arrMovies = handleButton();
        return arrMovies
    }

    return (
        <section className="movies">

            <Header isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} />
            <SearchForm keyword={isinputvalue} isinputvalue={handleKeyword} submit={handleSubmit} checkbox={handleCheckbox} searchArr={writeNewArr} saveMovie={saveMovie} />
            <MoviesCardList movies={isShort ? filterShortFilm(isNewArr) : isNewArr} moviesSaved={films} saveMovie={saveMovie} onDelete={removeitem} />
            <Footer />

        </section>
    )
}

export default SavedMovies;