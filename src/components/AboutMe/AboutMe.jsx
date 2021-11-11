import './AboutMe.css'
import React from 'react'

function AboutMe() {

    return (
        <section className="aboutme">
            <h2 className="aboutme__title">Студент</h2>
            <div className="aboutme__content">
                <div className="aboutme__container">
                    <h3 className="aboutme__name">Матвей</h3>
                    <p className="aboutme__profession">Фронтенд-разработчик, 22 года</p>
                    <p className="aboutme__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="aboutme__social">
                        <div className="aboutme__social-item"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="aboutme__link">Facebook</a></div>
                        <div className="aboutme__social-item"><a target="_blank" rel="noreferrer" href="https://github.com/" className="aboutme__link">Github</a></div>
                    </div>
                </div>
                <img src="https://sun9-17.userapi.com/impg/m_TEo0mInFZSgimVW5ETtFU64kCwySE-SYExvg/6JD_CAwueaw.jpg?size=2158x2160&quality=96&sign=4c8548867ca7a40027a11a5a6e343fcb&type=album" alt="Фотография студента" className="aboutme__photo" />
            </div>
        </section>
    )
}

export default AboutMe;