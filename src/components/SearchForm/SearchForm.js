/* eslint-disable react/jsx-no-undef */
import React from "react";
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import searchWhite from "../../images/searchWhite.svg";
import searchGray from "../../images/searchGray.svg";


export default function SearchForm() {
    return (
      <form className="searchform">
        <div className="searchform__container">
          <div className="searchform__icon">
            <img src={searchGray} alt="search icon"/>
          </div>
          <input className="searchform__input" type="text" placeholder="Фильм" required/>
          <button type="submit" className="searchform__button">
            <img src={searchWhite} alt="search icon"/>
          </button>
          <div className="searchform__line"/>
          <div className="searchform__toggle">
            <FilterCheckbox/>

            <p className="searchform__films">Короткометражки</p>
          </div>
        </div>

        <div className="searchform__toggle_bottom">
          <FilterCheckbox/>

          <p className="searchform__films">Короткометражки</p>
        </div>
      </form>
    )
}
