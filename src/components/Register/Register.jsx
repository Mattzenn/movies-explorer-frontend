import './Register.css'

import React from "react";
import { Link } from 'react-router-dom';


function Register() {
    return (
        <div className='register'>

            <div className='register-page'>
                <form className='register__form'>
                    <Link to="/" title="На главную" className="register__logo" />
                    <h2 className='register__title'>Добро пожаловать!</h2>

                    <label className="register__input-label">Имя</label>
                    <input name="Name" type="text" className="register__input register__input_type_login" id="email" placeholder="Имя" minLength="6" maxLength="40" required />
                    <span id="register__input-error" className="register__input-error">ОШИБКА</span>

                    <label className="register__input-label">E-mail</label>
                    <input name="Email" type="email" className="register__input register__input_type_login" id="email" placeholder="Email" minLength="6" maxLength="40" required />
                    <span id="register__input-error" className="register__input-error">ОШИБКА</span>

                    <label className="register__input-label">Пароль</label>
                    <input name="Password" type="password" className="register__input register__input_type_login" id="password" placeholder="Пароль" minLength="6" maxLength="40" required />
                    <span id="register__input-error" className="register__input-error">ОШИБКА</span>

                    <button type="submit" className='register__button'>Зарегистрироваться</button>
                    <p className='register__link'>Уже зарегистрированы? <Link className='register__link-way' to='/signin'>Войти</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;