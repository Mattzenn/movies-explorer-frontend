import './Login.css'

import React from "react";
import { Link } from 'react-router-dom';
import { useFormWithValidation } from "../../utils/useFormWithValidation";


function Login({ onLogin }) {

    // //стей пременные инпутов
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");


    // function handleChangeEmail(e) {
    //     setEmail(e.target.value);
    // }

    // function handleChangePassword(e) {
    //     setPassword(e.target.value);
    // }

    const { values, errors, isValid, handleChange } = useFormWithValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(values)
        // отправка данных для логина
        onLogin(values.email, values.password);
    }

    return (
        <div className='login'>

            <div className='login-page'>
                <form className='login__form'>
                    <Link to="/" title="На главную" className="login__logo" />

                    <h2 className='login__title'>Рады видеть!</h2>


                    <label className="login__input-label">E-mail</label>
                    <input name="email" type="email" className="login__input login__input_type_login" id="email" placeholder="Email" minLength="6" maxLength="40" required onChange={handleChange} value={values.email || ''} />
                    <span id="login__input-error" className="login__input-error">{errors.email}</span>

                    <label className="login__input-label">Пароль</label>
                    <input name="password" type="password" className="login__input login__input_type_login" id="password" placeholder="Пароль" minLength="6" maxLength="40" required onChange={handleChange} value={values.password || ''} />
                    <span id="login__input-error" className="login__input-error">{errors.password}</span>

                    <button type="submit" className={`login__button ${!isValid && 'login__button_disabled'}`} disabled={!isValid} onClick={handleSubmit}>Зарегистрироваться</button>
                    <p className='login__link'>Еще не зарегистрированы? <Link className='login__link-way' to='/signup'>Регистрация</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;