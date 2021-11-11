import './App.css'
import '../../vendor/styles/normalize.css'
import React from 'react';
import Main from '../Main/Main'
import { Route, Switch } from "react-router-dom";
import Register from "../Register/Register"
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'
import SearchForm from '../SearchForm/SearchForm';
import Error from '../Error/Error';
import Header from '../Header/Header';


export default function App() {

    const [isBurger, setIsBurger] = React.useState(false);

    function handleBurger() {
        setIsBurger(!isBurger);
    }


    return (
        <div className="app">

            <Switch>

                <Route exact path="/">
                    <Header isBurger={isBurger} onBurger={handleBurger} />
                    <Main />
                    <Footer />
                </Route>
                <Route path="/movies">
                    <Header isBurger={isBurger} onBurger={handleBurger} />
                    <SearchForm />
                    <Movies />
                    <Footer />
                </Route>
                <Route path="/saved-movies">
                    <Header isBurger={isBurger} onBurger={handleBurger} />
                    <SearchForm />
                    <SavedMovies />
                    <Footer />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Header isBurger={isBurger} onBurger={handleBurger} />
                    <Profile />
                </Route>
                <Route path="/error">
                    <Error message="Страница не найдена" status="404" />
                </Route>

            </Switch>
        </div>
    );
}