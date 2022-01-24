import './Register.css'

import React from "react";
import { Link } from 'react-router-dom';
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function Register({ onRegister }) {

    // отправка данных для регистрации 

    const { values, errors, isValid, handleChange } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();

        onRegister(values.name, values.email, values.password);
    }

    return (
        <div className='register'>

            <div className='register-page'>
                <form className='register__form'>
                    <Link to="/" title="На главную" className="register__logo" />
                    <h2 className='register__title'>Добро пожаловать!</h2>

                    <label className="register__input-label">Имя</label>
                    <input name="name" type="text" className="register__input register__input_type_login" id="name" placeholder="Имя" minLength="2" maxLength="40" required onChange={handleChange} value={values.name || ''} />
                    <span id="register__input-error" className="register__input-error">{errors.name}</span>

                    <label className="register__input-label">E-mail</label>
                    <input name="email" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" className="register__input register__input_type_login" id="email" placeholder="Email" minLength="2" maxLength="40" required onChange={handleChange} value={values.email || ''} />
                    <span id="register__input-error" className="register__input-error">{errors.email}</span>

                    <label className="register__input-label">Пароль</label>
                    <input name="password" type="password" className="register__input register__input_type_login" id="password" placeholder="Пароль" minLength="2" maxLength="40" required onChange={handleChange} value={values.password || ''} />
                    <span id="register__input-error" className="register__input-error">{errors.password}</span>

                    <button type="submit" className={`register__button ${!isValid && 'register__button_disabled'}`} disabled={!isValid} onClick={handleSubmit} >Зарегистрироваться</button>
                    <p className='register__link'>Уже зарегистрированы? <Link className='register__link-way' to='/signin'>Войти</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;