import './Profile.css'
import Header from '../Header/Header';
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from "../../utils/useFormWithValidation";

export default function Profile({ isBurger, onBurger, loggedIn, signOut, onUpdateUser, editIsSuccess, editIsFailed }) {

    const currentUser = React.useContext(CurrentUserContext);
    const { values, errors, isValid = false, handleChange, setIsValid } = useFormWithValidation();

    const user = JSON.parse(localStorage.getItem('currentUser'));

    // сохранение новой информации о пользователе
    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser(values.name, values.email);
        localStorage.setItem('currentUser', JSON.stringify(values));
        setIsValid(false)
    }


    return (
        <section className="profile">
            <Header isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} />
            <h1 className="profile__title">{`Привет, ${user.name}`}</h1>
            <form className="profile__form">
                <label className="profile__label">Имя<input name="name" minLength="2" maxLength="40" className="profile__input" type="text" value={values.name || user.name} onChange={handleChange} /></label>
                <span id="profile__input-error" className="profile__input-error">{errors.name}</span>
                <label className="profile__label">E-mail<input name="email" minLength="6" maxLength="40" className="profile__input" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={values.email || user.email} onChange={handleChange} /></label>
                <span id="profile__input-error" className="profile__input-error">{errors.email}</span>
                {editIsSuccess && <p className="profile__form-sbmt-success">Данные успешно изменены!</p>}
                {editIsFailed && <p className="profile__form-sbmt-failed">Ошибка при изменении данных!</p>}
            </form>
            <button className={`profile__button ${!isValid && 'profile__button_disabled'}`} disabled={(values.name === user.name
                && values.email === user.email) || !isValid} onClick={handleSubmit}>Редактировать</button>
            <Link to="/" className="profile__button profile__button_log-out" onClick={signOut}>Выйти из аккаунта</Link>
        </section>
    )
}