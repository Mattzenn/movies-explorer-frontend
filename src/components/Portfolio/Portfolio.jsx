import './Portfolio.css'
import React from 'react'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__items">
                <div className="portfolio__item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="">Статичный сайт</a></div>
                <div className="portfolio__item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="">Адаптивный сайт</a></div>
                <div className="portfolio__item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="">Одностраничное приложение</a></div>
            </div>
        </section>
    )
}

export default Portfolio;