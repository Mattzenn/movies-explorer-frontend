import './MoviesCard.css'
import { useLocation } from "react-router-dom";

import React from "react";


function MoviesCard({ movie }) {
    const location = useLocation();

    return (
        <li className="movies__card">
            <img className="movies__card-image" src={movie.image} alt={movie.title}></img>
            <div className="movies__container">
                <h2 className="movies__card-title">{movie.title}</h2>
                <p className="movies__card-movie-time">{movie.time}</p>
            </div>
            <button type="button" className={location.pathname === "/movies" ? "movies__card-button movies__card-save" : " movies__card-button movie__card-delete"}></button>
        </li>
    )
}

export default MoviesCard;