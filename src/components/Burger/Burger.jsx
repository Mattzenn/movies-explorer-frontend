import './Burger.css';
import { Link } from 'react-router-dom';

function Burger({ isBurger, onClose }) {

    return (
        <section className={`burger-box ${!isBurger && 'burger-box_off'}`}>
            <div className="burger">
                <button type="button" className="burger__button" onClick={onClose} />
                <div className="burger__conteiner">
                    <div className="burger__links">
                        <Link activeClassName="burger__link_active" exact to="/" className="burger__link">Главная</Link>
                        <Link activeClassName="burger__link_active" to="/movies" className="burger__link">Фильмы</Link>
                        <Link activeClassName="burger__link_active" to="/saved-movies" className="burger__link">Сохранённые фильмы</Link>
                    </div>
                    <Link to="/profile" className="header__logged-button header__logged-button_account">Аккаунт<span className="header__account-icon"></span></Link>
                </div>
            </div>
        </section>
    )
}

export default Burger;