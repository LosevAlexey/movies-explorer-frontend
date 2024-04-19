import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({handleTumblerChange, checked}) {
  return (
      <label className="filterCheckbox">
        <input className="filterCheckbox__checkbox" type="checkbox" checked={checked} onChange={handleTumblerChange} />
        <span className={"filterCheckbox__slider"}/>
      </label>
  );
}
