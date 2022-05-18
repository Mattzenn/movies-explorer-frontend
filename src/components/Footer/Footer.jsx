import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <section className="footer">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__container">
                <span className="footer__date">&copy; {new Date().getFullYear()}</span>
                <div className="footer__items">
                    <div className="footer__item"><a target="_blank" rel="noreferrer" className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></div>
                    <div className="footer__item"><a target="_blank" rel="noreferrer" className="footer__link" href="https://github.com/Mattzenn">Github</a></div>
                    <div className="footer__item"><a target="_blank" rel="noreferrer" className="footer__link" href="https://t.me/matvey_zenin">Telegram</a></div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
