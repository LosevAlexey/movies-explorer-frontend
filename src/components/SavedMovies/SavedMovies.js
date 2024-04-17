import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import {useSavedMovies} from "../../hooks/useSavedMovies";
import {useState} from "react";
import MainApi from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function SavedMovies() {
  const [preloader, setPreloader] = useState(false);
  const [errorText, setErrorText] = useState("");

  const mainApi = new MainApi(localStorage.getItem("jwt"));

  const {
    handleSetSearch,
    handleSetShortFilms,
    filteredFilms,
    shortFilms,
    search,
    handleDeleteSaved,
  } = useSavedMovies(mainApi);

  console.log(filteredFilms)

  return (
      <main className={"savedMovies"}>
        <SearchForm
          isChecked={shortFilms}
          handleSetSearch={handleSetSearch}
          handleShortFilms={handleSetShortFilms}
          search={search}
        />
        {preloader && <Preloader />}
        {errorText && <div className="text-medium">{errorText}</div>}
        <MoviesCardList
          filmsRemains={0}
          savedMoviesToggle={handleDeleteSaved}
          moviesList={filteredFilms}
        />
      </main>
  );
}

export default SavedMovies;
