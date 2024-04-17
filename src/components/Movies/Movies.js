import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import {CARDS_CONFIG} from "../../utils/constants";
import {useEffect, useState} from "react";
import useResize from "../../hooks/useResize";
import {moviesApi} from "../../utils/MoviesApi";
import {useMovies} from "../../hooks/useMovies";
import Preloader from "../Preloader/Preloader";
import MainApi from "../../utils/MainApi";

function getMoviesCount(width) {
  let countCards;

  Object.keys(CARDS_CONFIG)
    .sort((a, b) => a - b)
    .forEach((key) => {
      if (width > +key) {
        countCards = CARDS_CONFIG[key];
      }
    });

  return countCards;
}

function Movies() {
  const screenWidth = useResize();


  const [filmsSaved, setFilmsSaved] = useState([]);
  const [MoviesCount, setMoviesCount] = useState([]);
  const [filmsShowed, setFilmsShowed] = useState([]);

  const {
    handleSetSearch,
    handleSetShortFilms,
    filteredFilms,
    notFound,
    shortFilms,
    search,
    loading
  } = useMovies(moviesApi.getMovies.bind(moviesApi));

  const mainApi = new MainApi(localStorage.getItem("jwt"));

  useEffect(() => {
    setMoviesCount(getMoviesCount(screenWidth));
  }, [screenWidth]);

  function handleMore() {
    const newFilmsShowed = filmsShowed.concat(
      filteredFilms.slice(filmsShowed.length, MoviesCount[1] + filmsShowed.length)
    );
    setFilmsShowed(newFilmsShowed);
  }

  useEffect(() => {
    const sliceData = filteredFilms.slice(0, getMoviesCount(screenWidth)[0]);
    setFilmsShowed(sliceData);
  }, [filteredFilms, screenWidth]);

  async function toggleSavedMovies(film, isFavorite) {
    const jwtToken = localStorage.getItem("jwt");
    const mainApi = new MainApi(jwtToken);

    if (isFavorite) {
      const movieData = {
        image: "https://api.nomoreparties.co" + film.image.url,
        trailerLink: film.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + film.image.url,
        movieId: film.id,
        country: film.country || "Unknown",
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
      };

      try {
        const savedMovie = await mainApi.save(movieData);
        const savedMovies = JSON.parse(localStorage.getItem("savedFilms"));
        const updatedSavedMovies = savedMovies.concat(savedMovie);
        setFilmsSaved(updatedSavedMovies);
        localStorage.setItem("savedFilms", JSON.stringify(updatedSavedMovies));
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        await mainApi.delete(film._id);
        const savedMovies = JSON.parse(localStorage.getItem("savedFilms"));
        const updatedSavedMovies = savedMovies.filter((element) => element._id !== film._id);
        setFilmsSaved(updatedSavedMovies);
        localStorage.setItem("savedFilms", JSON.stringify(updatedSavedMovies));
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    const localStorageFilmsSaved = localStorage.getItem("savedFilms");

    if (!localStorageFilmsSaved) {
      mainApi.getSaved().then((savedFilms) => {
        setFilmsSaved(savedFilms);
        localStorage.setItem("savedFilms", JSON.stringify(savedFilms));
      });
    } else {
      const savedLocalFilms = JSON.parse(localStorageFilmsSaved);
      setFilmsSaved(savedLocalFilms);
    }
  }, []);

  return (
      <main className="movies" >
        <SearchForm
          isChecked={shortFilms}
          handleSetSearch={handleSetSearch}
          handleShortFilms={handleSetShortFilms}
          search={search}
        />
        {loading && <Preloader />}
        {filteredFilms !== null && filmsShowed !== null && (
          <MoviesCardList
            filmsRemains={filteredFilms.length - filmsShowed.length}
            handleMore={handleMore}
            moviesList={filmsShowed}
            savedMoviesToggle={toggleSavedMovies}
            filmsSaved={filmsSaved}
            notFound={notFound}
          />
        )}
      </main>
  );
}

export default Movies;
