import './App.css';
import '../../vendor/styles/normalize.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main'
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Register from "../Register/Register"
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login'
import Error from '../Error/Error';
import MoviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi"
import Preloader from '../Preloader/Preloader';
import * as auth from '../../utils/auth'

export default function App() {

    const history = useHistory();
    const location = useLocation();

    const [isBurger, setIsBurger] = React.useState(false);
    const [isPreloader, setIsPreloader] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [movies, setMovies] = React.useState([]);
    const [moviesSaved, setMoviesSavied] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);

    function handleBurger() {
        setIsBurger(!isBurger);
    }

    React.useEffect(() => {
        //взятие статуса токена из локального хранилища
        const path = location.pathname;
        const token = localStorage.getItem("token");
        if (token) {
            auth.checkToken(token)
                .then((res) => {
                    // setUserEmail(res.email);
                    setLoggedIn(true);
                    //даём доступ к оснавной странице
                    history.push(path);

                    //возвращаем данные пользователя из базы данных
                    mainApi.getProfileInfo(token).then((result) => {
                        //выполняем запись полученных данных в переменную состояния

                        setCurrentUser(result)

                        getStartMovies()
                    })
                })
                .catch((err) => {
                    alert(err);
                    localStorage.removeItem("token");
                });
        }
        MoviesApi
            .getMovies()
            .then((data) => {
                setMovies(data)
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    function getStartMovies() {
        setIsPreloader(true);
        const token = localStorage.getItem("token");
        //показываем все карточки из базы данных
        mainApi
            .getAllCard(token)
            .then((res) => {
                const items = res.map((item) => {
                    return {
                        //возвращаем массив с нужными данными для создания начальных карточек
                        key: item._id,
                        id: item.movieId,
                        image: item.image,
                        nameRU: item.nameRU,
                        duration: item.duration,
                        owner: item.owner,
                        trailer: item.trailer
                    };
                });
                //выполняем запись этого массива в переменную состояния
                setMoviesSavied(items);
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => setIsPreloader(false))
    }

    function handleCardDelete(_id) {
        const token = localStorage.getItem("token");
        setIsPreloader(true);
        // Отправляем запрос в API и удаляем карточку
        mainApi
            .removeCard(_id, token)
            .then((res) => {
                const newMoviesList = moviesSaved.filter((m) => {
                    if (_id === m.id) {
                        return false
                    } else {
                        return true
                    }
                });
                setMoviesSavied(newMoviesList);
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => setIsPreloader(false))
    }

    //регестрируем нового пользователя
    function registerUser(name, email, password) {
        setIsPreloader(true);
        auth.register(name, email, password)
            .then((result) => {
                history.push('/signin');
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => setIsPreloader(false))
    }

    //вход пользователя 
    function loginUser(email, password) {
        setIsPreloader(true);
        auth.login(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    setLoggedIn(true);
                    history.push("/movies");
                    mainApi.getProfileInfo(res.token)
                        .then((result) => {
                            //выполняем запись полученных данных в переменную состояния
                            setCurrentUser(result);
                        });
                }
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => setIsPreloader(false))
    }

    // изменение данных пользователя
    function handleUpdateUser(name, email) {

        setIsPreloader(true);
        const token = localStorage.getItem("token");

        //выполняем запрос на сервер для отправки новой информации о пользователе
        mainApi
            .putProfileInfo(name, email, token)
            .then((result) => {
                //выполняем запись полученных данных в переменную состояния
                setCurrentUser(result);
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => setIsPreloader(false))
    }

    //выход пользователя
    function signOut() {
        localStorage.removeItem("token");
        setLoggedIn(false);
    }

    function handleSaveMovies(card) {
        const token = localStorage.getItem("token");
        setIsPreloader(true);
        // Отправляем запрос в API и создаём карточку
        mainApi
            .addCard(card, token)
            .then((item) => {
                const newCard = {
                    //возвращаем массив с нужными данными для создания начальных карточек
                    key: item._id,
                    id: item.movieId,
                    image: item.image,
                    nameRU: item.nameRU,
                    duration: item.duration,
                    owner: item.owner,
                    trailer: item.trailer
                };
                setMoviesSavied([newCard, ...moviesSaved]);
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => setIsPreloader(false))
    }

    return (
        <div className="app">
            <CurrentUserContext.Provider value={currentUser}>
                <Preloader visible={isPreloader} />
                <Switch>
                    <Route exact path="/">
                        <Main isBurger={isBurger} onBurger={handleBurger} loggedIn={loggedIn} />
                    </Route>

                    <ProtectedRoute path="/movies" isPreloader={isPreloader} setIsPreloader={setIsPreloader} component={Movies} isBurger={isBurger} loggedIn={loggedIn} films={movies} onBurger={handleBurger} saveMovie={handleSaveMovies} moviesSaved={moviesSaved} onDelete={handleCardDelete} />

                    <ProtectedRoute path="/saved-movies" component={SavedMovies} loggedIn={loggedIn} isBurger={isBurger} films={moviesSaved} onBurger={handleBurger} onDeleteCard={handleCardDelete} />

                    <ProtectedRoute path="/profile" component={Profile} currentUser={currentUser} loggedIn={loggedIn} isBurger={isBurger} onBurger={handleBurger} signOut={signOut} onUpdateUser={handleUpdateUser} />

                    <Route path="/signup">
                        <Register onRegister={registerUser} />
                    </Route>

                    <Route path="/signin">
                        <Login onLogin={loginUser} />
                    </Route>

                    <Route path="*">
                        <Error message="Страница не найдена" status="404" />
                    </Route>
                </Switch>
            </CurrentUserContext.Provider>
        </div >
    );
}