import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
  return (
      <main className={"savedMovies"}>
        <SearchForm />
        <MoviesCardList />
      </main>
  );
}

export default SavedMovies;
