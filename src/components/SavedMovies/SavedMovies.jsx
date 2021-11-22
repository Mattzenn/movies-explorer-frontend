import './SavedMovies.css'

import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies({ isBurger, onBurger, handleBurger, loggedIn, films, onDelete, saveMovie }) {

    const [isinputvalue, setIsinputvalue] = React.useState('');
    const [isNewArr, setNewArr] = React.useState([]);
    const [isTextSearch, setIsTextSearch] = React.useState(true);

    const [isShort, setIsShort] = React.useState(false);

    function handleCheckbox(boolean) {
        setIsShort(boolean)
        console.log(isShort)
    }

    function handleKeyword(value) {
        console.log(value)
        setIsinputvalue(value)
        console.log(isinputvalue)
    }

    function writeNewArr(newArr) {
        setNewArr(newArr)

        console.log(newArr)
    }

    console.log(films)

    function handleButton() {

        function findMovies(movie, keyword) {
            console.log(isShort)
            return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        }

        setIsTextSearch(false);

        return films.filter((movie) => {
            if (isShort) {
                return findMovies(movie, isinputvalue) && movie.duration < 40;
            } else {
                return findMovies(movie, isinputvalue);
            }
        })
    }


    return (
        <section className="movies">

            <Header isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} checkbox={handleCheckbox} />
            <SearchForm keyword={isinputvalue} isinputvalue={handleKeyword} submit={handleButton} checkBoxClick={handleCheckbox} newArr={writeNewArr} saveMovie={saveMovie} />
            <MoviesCardList movies={isNewArr} saveMovie={saveMovie} onDelete={onDelete} moviesSaved={films} />
            <Footer />

        </section>
    )
}

export default SavedMovies;