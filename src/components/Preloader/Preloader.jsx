import React from 'react'
import './Preloader.css'

const Preloader = ({ visible }) => {
    return (
        <div className={`preloader ${visible ? 'visible' : 'invisible'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader