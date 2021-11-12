import './MoviesCard.css'
import { useLocation } from "react-router-dom";

import React from "react";

function MoviesCard({ movie }) {

    const [isLiked, setIsSave] = React.useState(false);

    function handleSaveClick() {
        setIsSave(true);
    }

    const cardSaveClassName = (
        `movies__card-button ${isLiked ? 'movies__card-save-active' : 'movies__card-save'}`
    );

    const location = useLocation();

    return (
        <li className="movies__card">
            <img className="movies__card-image" src={movie.image} alt={movie.title}></img>
            <div className="movies__container">
                <h2 className="movies__card-title">{movie.title}</h2>
                <p className="movies__card-movie-time">{movie.time}</p>
            </div>

            <>
                {location.pathname === "/movies" ?

                    <button type="button" className={cardSaveClassName} onClick={handleSaveClick}></button>

                    :

                    <button type="button" className={"movies__card-button movie__card-delete"}></button>

                }
            </>

        </li>
    )
}

export default MoviesCard;