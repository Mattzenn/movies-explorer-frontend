import './Profile.css'
import Header from '../Header/Header';
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from "../../utils/useFormWithValidation";

export default function Profile({ isBurger, onBurger, handleBurger, loggedIn, signOut, onUpdateUser }) {



    // создание переменных состояния для хранения имени и информации о пользователе
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    //создание контекста о пользователе
    const currentUser = React.useContext(CurrentUserContext);

    // //изменение имени - значение инпута
    // function handleChangeName(evt) {
    //     setName(evt.target.value);
    // }

    // //изменение email - значение инпута

    // function handleChangeEmail(evt) {
    //     setEmail(evt.target.value);
    // }

    const { values, errors, isValid = false, handleChange } = useFormWithValidation();

    // запись данных в контекст

    React.useEffect(() => {
        setName(currentUser.data.name);
        setEmail(currentUser.data.email);
    }, [currentUser]);

    // сохранение новой информации о пользователе
    function handleSubmit(e) {
        e.preventDefault();

        console.log(values.name, values.email)

        onUpdateUser(values.name, values.email);

    }

    return (

        <section className="profile">
            <Header isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} />
            <h1 className="profile__title">{`Привет, ${name}`}</h1>
            <form className="profile__form">
                <label className="profile__label">Имя<input name="name" minLength="2" maxLength="40" className="profile__input" type="text" value={values.name || name} onChange={handleChange} /></label>
                <span id="profile__input-error" className="profile__input-error">{errors.name}</span>
                <label className="profile__label">E-mail<input name="email" minLength="6" maxLength="40" className="profile__input" type="email" value={values.email || email} onChange={handleChange} /></label>
                <span id="profile__input-error" className="profile__input-error">{errors.email}</span>
                {/* <button className={`profile__button ${!isValid && 'profile__button_disabled'}`} disabled={!isValid} onClick={handleSubmit}>Редактировать</button> */}
            </form>
            <button className={`profile__button ${!isValid && 'profile__button_disabled'}`} disabled={!isValid} onClick={handleSubmit}>Редактировать</button>
            <Link to="/" className="profile__button profile__button_log-out" onClick={signOut}>Выйти из аккаунта</Link>
        </section>
    )
}