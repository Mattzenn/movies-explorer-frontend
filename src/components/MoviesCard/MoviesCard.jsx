import './MoviesCard.css'
import { useLocation } from "react-router-dom";

import React from "react";

function MoviesCard({ movie, onDelete, saved, saveMovie }) {

    function putOderDeleteLike() {
        if (!saved) {
            saveMovie(movie)
        }
        else {
            onDelete(movie.id)
        }
    }

    function deleteMovie() {
        onDelete(movie.id)
    }

    const cardSaveClassName = (
        `movies__card-button ${saved ? 'movies__card-save-active' : 'movies__card-save'}`
    );

    const location = useLocation();

    //* Преобразование времени
    function transformTime(duration) {
        const hours = Math.trunc(duration / 60);
        const minutes = duration % 60;
        if (hours === 0) {
            return `${minutes}м`;
        } else {
            return `${hours}ч ${minutes}м`;
        }
    };

    return (
        <li className="movies__card">
            <a href={location.pathname === "/movies" ? movie.trailerLink : movie.trailer}>
                <img className="movies__card-image" src={location.pathname === "/movies" ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU}></img>
            </a>
            <div className="movies__container">
                <h2 className="movies__card-title">{movie.id}{movie.nameRU}</h2>
                <p className="movies__card-movie-time">{transformTime(movie.duration)}</p>
            </div>

            <>
                {location.pathname === "/movies" ?

                    <button type="button" className={cardSaveClassName} onClick={putOderDeleteLike}></button>

                    :

                    <button type="button" className={"movies__card-button movie__card-delete"} onClick={deleteMovie}></button>

                }
            </>

        </li>
    )
}

export default MoviesCard;