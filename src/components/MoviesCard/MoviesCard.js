/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./MoviesCard.css";
import phpto from '../../images/photo.svg'


function formatDuration (time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}ч${minutes}м`;
}

export default function MoviesCard({movie}) {
  const {duration, nameRU, nameEN, trailerLink, image} = movie;
  console.log(movie)
  const img = `https://api.nomoreparties.co${image.url}`;
  const isLiked = (Math.random() > 0.5);

  const btnCls = `moviesCard__button ${isLiked ? 'moviesCard__button_active' : ''}`
  return (
      <div className="moviesCard">
        <img className="moviesCard__image" src={img} />
        <div className="moviesCard__info">
          <h2 className="moviesCard__title">{nameRU}</h2>
          <button type="button" className={btnCls}>

          </button>

        </div>
        <div className="moviesCard__duration">
          {formatDuration(duration)}
        </div>
      </div>
  );
}
