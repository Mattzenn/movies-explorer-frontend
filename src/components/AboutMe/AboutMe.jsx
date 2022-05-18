import './AboutMe.css'
import React from 'react'

import image from '../../images/own.jpeg';

function AboutMe() {

    return (
        <section className="aboutme">
            <h2 className="aboutme__title">Студент</h2>
            <div className="aboutme__content">
                <div className="aboutme__container">
                    <h3 className="aboutme__name">Матвей</h3>
                    <p className="aboutme__profession">Фронтенд-разработчик, 23 года</p>
                    <p className="aboutme__info">У меня есть знания и практический опыт в различных сферах: веб-разработка, интернет-маркетинг, управление IT проектами. <br></br><br></br>Последние 3 года я руковожу проектом по внедрению e-commrce платформы с 0 в международной компании Bosch. Также я предоставляю фриланс услуги по разработке сайтов. <br></br><br></br>Моя миссия: менять мир за счет реализации инновационных проектов в сфере IT, которыми пользуются множество людей. 🏆</p>
                    <div className="aboutme__social">
                        <div className="aboutme__social-item"><a target="_blank" rel="noreferrer" href="https://t.me/matvey_zenin" className="aboutme__link">Telegram</a></div>
                        <div className="aboutme__social-item"><a target="_blank" rel="noreferrer" href="https://github.com/Mattzenn" className="aboutme__link">Github</a></div>
                    </div>
                </div>
                <img src={image} alt="Фотография студента" className="aboutme__photo" />
            </div>
        </section>
    )
}

export default AboutMe;
