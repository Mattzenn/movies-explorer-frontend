import './Login.css'

import React from "react";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='login'>

            <div className='login-page'>
                <form className='login__form'>
                    <Link to="/" title="На главную" className="login__logo" />

                    <h2 className='login__title'>Рады видеть!</h2>


                    <label className="login__input-label">E-mail</label>
                    <input name="Email" type="email" className="login__input login__input_type_login" id="email" placeholder="Email" minLength="6" maxLength="40" required />
                    <span id="login__input-error" className="login__input-error">ОШИБКА</span>

                    <label className="login__input-label">Пароль</label>
                    <input name="Password" type="password" className="login__input login__input_type_login" id="password" placeholder="Пароль" minLength="6" maxLength="40" required />
                    <span id="login__input-error" className="login__input-error">ОШИБКА</span>

                    <button type="submit" className='login__button'>Зарегистрироваться</button>
                    <p className='login__link'>Еще не зарегистрированы? <Link className='login__link-way' to='/signup'>Регистрация</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;