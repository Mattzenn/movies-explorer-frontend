import './AboutProject.css'
import React from 'react'

function AboutProject() {

    return (
        <section className="aboutproject">
            <h2 className="aboutproject__title">О проекте</h2>
            <div className="aboutproject__info">
                <div className="aboutproject__textblock">
                    <div className="aboutproject__text-container">
                        <p className="aboutproject__subtitle">Дипломный проект включал 5 этапов</p>
                        <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="aboutproject__text-container">
                        <p className="aboutproject__subtitle">На выполнение диплома ушло 5 недель</p>
                        <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="aboutproject__lifecycle-container">
                    <div className="aboutproject__lifecycle-element aboutproject__lifecycle-element_type_left">
                        <div className="aboutproject__scale aboutproject__scale_color_green">1 неделя</div>
                        <p className="aboutproject__scale-text">Back-end</p>
                    </div>
                    <div className="aboutproject__lifecycle-element aboutproject__lifecycle-element_type_right">
                        <div className="aboutproject__scale aboutproject__scale_color_grey">4 неделя</div>
                        <p className="aboutproject__scale-text">Front-end</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutProject;