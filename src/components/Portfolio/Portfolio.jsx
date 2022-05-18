import './Portfolio.css'
import React from 'react'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__items">
                <div className="portfolio__item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="https://github.com/Mattzenn/how-to-learn">Статичный сайт</a></div>
                <div className="portfolio__item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="https://github.com/Mattzenn/russian-travel">Адаптивный сайт</a></div>
                <div className="portfolio__item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="https://github.com/Mattzenn/react-mesto-api-full">Одностраничное приложение</a></div>
            </div>
        </section>
    )
}

export default Portfolio;
