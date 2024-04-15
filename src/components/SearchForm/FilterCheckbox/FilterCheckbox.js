import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
      <label className="filterCheckbox__tumbler">
        <input className="filterCheckbox__checkbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <span className={"filterCheckbox__slider"}/>
      </label>
  );
}
