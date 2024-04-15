import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import {data} from "../../utils/constants";

export default function MoviesCardList() {
  const movies = data.slice(0, 16);
  return (
    <section className={"moviesCardList"}>
      <ul className={"moviesCardList__container"}>
        {
          movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />
          ))
        }
      </ul>
      <button type="button" className="moviesCardList__button">Еще</button>
    </section>
  );
}



