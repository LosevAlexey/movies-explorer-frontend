import React, {useEffect, useState} from "react";
import "./MoviesCard.css";
import {MOVIES_API_URL} from "../../utils/constants";
import {useLocation} from "react-router-dom";
import close from "../../images/close.svg"

function formatDuration(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}ч${minutes}м`;
}

export default function MoviesCard({movie, savedMoviesToggle, filmsSaved}) {
  const {pathname} = useLocation();
  const [favorite, setFavorite] = useState(false);

  function handleFavoriteToogle() {
    const newFavorite = !favorite;
    const savedFilm = filmsSaved.filter((obj) => {
      return obj.movieId === movie.id;
    });
    savedMoviesToggle({...movie, _id: savedFilm.length > 0 ? savedFilm[0]._id : null}, newFavorite);
  }

  function handleFavoriteDelete() {
    savedMoviesToggle(movie, false);
  }


  useEffect(() => {
    if (pathname !== '/saved-movies') {
      const savedFilm = filmsSaved.find((obj) => obj.movieId === movie.id);
      setFavorite(!!savedFilm);
    }
  }, [pathname, filmsSaved, movie.id]);

  const location = useLocation();

  const path = location.pathname;
  const isSavedMovies = path === "/saved-movies";
  const img = isSavedMovies ? movie.thumbnail : MOVIES_API_URL + movie.image.formats.thumbnail.url;
  const link = movie.trailerLink;

  const btnCls = `moviesCard__button ${favorite ? 'moviesCard__button_active' : ''}`
  return (
    <div className="moviesCard">
      <a href={link} target={"_blank"}>
        <img className="moviesCard__image" src={img} alt={"movie image"}/>
      </a>
      <div className="moviesCard__info">
        <h2 className="moviesCard__title">{movie.nameRU}</h2>
        {pathname !== "/saved-movies" ? (
          <button type="button" className={btnCls} onClick={handleFavoriteToogle}/>
        ) : (
          <button type="button" className="moviesCard__button_delete" onClick={handleFavoriteDelete}>
            <img src={close} alt="delete"/>
          </button>
        )}


      </div>
      <div className="moviesCard__duration">
        {formatDuration(movie.duration)}
      </div>
    </div>
  );
}
