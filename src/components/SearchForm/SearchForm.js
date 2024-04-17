/* eslint-disable react/jsx-no-undef */
import React, {useState} from "react";
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import searchWhite from "../../images/searchWhite.svg";
import searchGray from "../../images/searchGray.svg";


export default function SearchForm({ handleShortFilms, isChecked, handleSetSearch, search }) {
  const [input, setInput] = useState(search || "");


  function handleSubmit(e) {
    if (input === "") return;
    e.preventDefault();
    handleSetSearch(input);
  }

  function handleCheckBoxChange(e) {
    handleSetSearch(input);
    handleShortFilms(!isChecked);
    console.log("check", isChecked)
  }
    return (
      <form className="searchform" onSubmit={handleSubmit}>
        <div className="searchform__container">
          <div className="searchform__icon">
            <img src={searchGray} alt="search icon"/>
          </div>
          <input className="searchform__input" type="text" placeholder="Фильм" required value={input} onChange={e => setInput(e.target.value)}/>
          <button type="submit" className="searchform__button">
            <img src={searchWhite} alt="search icon"/>
          </button>
          <div className="searchform__line"/>
          <div className="searchform__toggle">
            <FilterCheckbox handleTumblerChange={handleCheckBoxChange} checked={isChecked} />

            <p className="searchform__films">Короткометражки</p>
          </div>
        </div>

        <div className="searchform__toggleBottom">
          <FilterCheckbox handleTumblerChange={handleCheckBoxChange} checked={isChecked} />

          <p className="searchform__films">Короткометражки</p>
        </div>
      </form>
    )
}
