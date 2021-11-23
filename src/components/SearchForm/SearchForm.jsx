import './SearchForm.css'
import React from "react";
import icon from "../../images/searchicon.svg";


function SearchForm({ keyword, isinputvalue, searchArr, submit, checkbox }) {

    const [isError, setIsError] = React.useState(false);
    const [isChange, setIsChange] = React.useState(true);
    const [searchSuccessful, setSearchSuccessful] = React.useState(false);

    function handleChange() {
        setIsChange(!isChange);
        checkbox(isChange)
    }

    function handleSearchChange(e) {
        isinputvalue(e.target.value)
        setIsError(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!keyword) {
            setIsError(true);
        } else {
            searchArr([])
            const arrMovies = submit();

            if (arrMovies.length === 0) {
                setSearchSuccessful(true);
            } else {
                setSearchSuccessful(false);
            }
            searchArr(arrMovies);
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
                    <label className="searchform__label" htmlFor="short-films"></label>
                    <span className="searchform__text">Короткометражки</span>
                </div>
            </div>
        </section>
    )
}

export default SearchForm;
