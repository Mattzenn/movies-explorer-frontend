import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';



function Movies({ isBurger, onBurger, films, loggedIn, saveMovie, onDelete, moviesSaved, isPreloader, setIsPreloader }) {

    const [isinputvalue, setIsinputvalue] = React.useState('');
    const [isNewArr, setNewArr] = React.useState([]);
    const [isTextSearch, setIsTextSearch] = React.useState(true);


    const [isShort, setIsShort] = React.useState(false);
    const [searchSuccessful, setSearchSuccessful] = React.useState(false);


    function handleCheckbox(boolean) {
        setIsShort(boolean)
    }

    function handleKeyword(value) {
        setIsinputvalue(value)
    }

    function writeNewArr(newArr) {
        setNewArr(newArr)
    }

    // 3. тест

    // проверка данных фильмов из localStorage
    React.useEffect(() => {
        let localMovies = JSON.parse(localStorage.getItem('films'));
        if (localMovies === null) {
            localMovies = []
        }
        setNewArr(localMovies);
        console.log(isNewArr)
    }, [])

    // добавление данных фильмов в localStorage
    React.useEffect(() => {
        localStorage.setItem('films', JSON.stringify(isNewArr));
    }, [isNewArr])



    function handleButton() {

        setIsPreloader(true);

        function findMovies(movie, keyword) {
            return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        }

        setIsPreloader(false);

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
            <SearchForm keyword={isinputvalue} isinputvalue={handleKeyword} submit={handleButton} checkBoxClick={handleCheckbox} newArr={writeNewArr} />
            <MoviesCardList movies={isNewArr} saveMovie={saveMovie} onDelete={onDelete} moviesSaved={moviesSaved} />
            <Footer />
        </section>
    )
}

export default Movies;