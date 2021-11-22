import './SearchForm.css'

import React from "react";

import icon from "../../images/searchicon.svg";


function SearchForm({ keyword, isinputvalue, newArr, submit, checkBoxClick }) {

    const [isError, setIsError] = React.useState(false);
    const [isChange, setIsChange] = React.useState(true);
    const [searchSuccessful, setSearchSuccessful] = React.useState(false);

    function handleChange() {
        setIsChange(!isChange);
        checkBoxClick(isChange)
    }

    function handleSearchChange(e) {
        isinputvalue(e.target.value)
        setIsError(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!keyword) {
            setIsError(true);
            // console.log("not good")
        } else {
            newArr([])
            const arrMovies = submit();

            if (arrMovies.length === 0) {
                setSearchSuccessful(true);
            } else {
                setSearchSuccessful(false);
            }

            newArr(arrMovies);
            console.log(arrMovies)
        }
    }



    return (
        <section className="searchform">
            <div className="searchform__container">
                <form className="searchform__main">
                    <img src={icon} className="searchform__icon" alt="icon"></img>
                    <input className="searchform__input" placeholder="Фильм" type="text" minLength={2} maxLength={40} required onChange={handleSearchChange} />
                    <p>{isError && 'Нужно ввести ключевое слово'}</p>
                    <p className={`${!searchSuccessful && 'invisable'}`}>Ничего не найдено</p>
                    <button type="submit" className="searchform__button" onClick={handleSubmit}></button>
                </form>
                <div className="searchform__addition">
                    <input className="searchform__checkbox" id="short-films" type="checkbox" onChange={handleChange} />
                    {/* <input className="searchform__checkbox" id="short-films" type="checkbox" onChange={checkbox} checked={checkbox ? true : false} /> */}
                    <label className="searchform__label" htmlFor="short-films"></label>
                    <span className="searchform__text">Короткометражки</span>
                </div>
            </div>


        </section>
    )
}

export default SearchForm;
