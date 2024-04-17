import {useEffect, useState, useCallback, useMemo} from "react";
import {SHORT_DURATION} from "../utils/constants";

export const useMovies = (fetchFilms) => {
  const [state, setState] = useState({
    films: [],
    error: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const localStorageSearch = localStorage.getItem("searchInput") || "";
  const localStorageTumbler = localStorage.getItem("checked") === "true";

  const [search, setSearch] = useState(localStorageSearch);
  const [shortFilms, setShortFilms] = useState(localStorageTumbler);

  const filteredFilms = useMemo(() => {
    const {films} = state;

    if (isLoading || (!films.length && (search || shortFilms))) {
      setIsLoading(true);

      const handleFetchFilms = async () => {
        let filmsData = localStorage.getItem("allFilms");

        if (!filmsData) {
          filmsData = await fetchFilms();
        } else {
          filmsData = JSON.parse(filmsData);
        }

        localStorage.setItem("allFilms", JSON.stringify(filmsData));

        return filmsData;
      };

      handleFetchFilms()
        .then((res) => {
          setState((prevState) => ({
            ...prevState,
            films: res,
          }));
        })
        .catch((err) => {
          setState((prevState) => ({
            ...prevState,
            error: err.errorText,
          }));
        })
        .finally(() =>
          setIsLoading(false)
        );

      return [];
    }

    if (!search && !shortFilms) {
      return films;
    }

    const result = films.filter(film => {
      const {nameRU, duration, nameEN} = film;
      const searched = !!search && (nameRU.toLowerCase().includes(search.toLowerCase()) || nameEN.toLowerCase().includes(search.toLowerCase()));
      const short = shortFilms && duration < SHORT_DURATION;

      if (search && shortFilms && searched && short) {
        return true;
      }

      if (search && !shortFilms && searched) {
        return true;
      }

      if (!search && shortFilms && short) {
        return true;
      }

      return false;
    });

    localStorage.setItem("searchedFilms", JSON.stringify(result));
    return result;
  }, [search, shortFilms, isLoading]);

  const notFound = (search || shortFilms) && filteredFilms.length === 0 && !isLoading;

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
    localStorage.setItem("searchInput", value);
  }, []);

  const handleSetShortFilms = useCallback((checked) => {
    setShortFilms(checked);
    localStorage.setItem("checked", checked);
  }, []);

  return {
    handleSetSearch,
    handleSetShortFilms,
    filteredFilms,
    notFound,
    initFilms: state.films,
    loading: isLoading,
    shortFilms,
    search,
  };
};
