import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies }) {


    return (
        <ul className="movies__cardlist">
            {movies.map((movie) => (
                <MoviesCard key={movie._id} movie={movie} saved={false} />
            ))}
        </ul>
    )
}