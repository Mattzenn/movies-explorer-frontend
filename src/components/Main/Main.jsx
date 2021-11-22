import React from 'react'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Main.css'


export default function Main({ isBurger, onBurger, loggedIn }) {

    return (
        <main className="main">
            <Header isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>

    )
}