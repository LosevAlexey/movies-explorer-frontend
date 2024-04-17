import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import {useLocation} from "react-router-dom";
import movies from "../Movies/Movies";

export default function MoviesCardList({
                                         moviesList,
                                         savedMoviesToggle,
                                         filmsSaved,
                                         filmsRemains,
                                         handleMore,
                                         notFound
                                       }) {
  const {pathname} = useLocation();

  return (
    <section className={"moviesCardList"}>
      <div className={"moviesCardList__container"}>
        {
          moviesList.map((movie) => (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMoviesToggle={savedMoviesToggle}
              filmsSaved={filmsSaved}
            />
          ))
        }
        {
          notFound && <div className="moviesCardList__notFound">Ничего не найдено</div>
        }
      </div>
      {filmsRemains > 0 && pathname !== '/saved-movies' && (
        <button type="button" className="moviesCardList__button" onClick={handleMore}>Еще</button>
      )}

    </section>
  );
}



