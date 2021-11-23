import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';



function Movies({ isBurger, onBurger, films, loggedIn, saveMovie, onDelete, moviesSaved, setIsPreloader }) {

    const [isinputvalue, setIsinputvalue] = React.useState('');
    const [isNewArr, setNewArr] = React.useState([films]);
    const [isTextSearch, setIsTextSearch] = React.useState(true);
    const [isShort, setIsShort] = React.useState(false);
    // const [searchSuccessful, setSearchSuccessful] = React.useState(false);


    const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration < 40);

    React.useEffect(() => {
        setNewArr(films)
    }, [])

    function handleCheckbox(boolean) {
        setIsShort(boolean)
    }

    function handleKeyword(value) {
        setIsinputvalue(value)
    }

    function writeNewArr(searchArr) {
        setNewArr(searchArr)
    }

    // проверка данных фильмов из localStorage
    React.useEffect(() => {
        let localMovies = JSON.parse(localStorage.getItem('films'));
        if (localMovies === null) {
            localMovies = []
        }
        setNewArr(localMovies);
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
            if (!isShort) {
                return findMovies(movie, isinputvalue);
            } else {
                return findMovies(movie, isinputvalue);
            }
        })
    }

    return (
        <section className="movies">
            <Header isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} />
            <SearchForm keyword={isinputvalue} isinputvalue={handleKeyword} submit={handleButton} checkbox={handleCheckbox} searchArr={writeNewArr} />
            <MoviesCardList movies={isShort ? filterShortFilm(isNewArr) : isNewArr} saveMovie={saveMovie} onDelete={onDelete} moviesSaved={moviesSaved} />
            <Footer />
        </section>
    )
}

export default Movies;