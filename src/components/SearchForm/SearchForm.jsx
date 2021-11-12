import './SearchForm.css'

import React from "react";

import icon from "../../images/searchicon.svg";


function SearchForm() {
    return (
        <section className="searchform">
            <div className="searchform__container">
                <form className="searchform__main">
                    <img src={icon} className="searchform__icon" alt="icon"></img>
                    <input className="searchform__input" placeholder="Фильм" type="text" required />
                    <button type="submit" className="searchform__button"></button>
                </form>
                <div className="searchform__addition">
                    <input className="searchform__checkbox" id="short-films" type="checkbox" />
                    <label className="searchform__label" htmlFor="short-films"></label>
                    <span className="searchform__text">Короткометражки</span>
                </div>
            </div>

        </section>
    )
}

export default SearchForm;