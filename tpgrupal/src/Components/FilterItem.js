import React, { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";

export const FilterItem = ({ name, id, setActualPage }) => {
  const { filters, setFilters } = useContext(FiltersContext);

  const [checked, setChecked] = useState(false);

  let filterRef = filters[id - 1];

  function handleClick(e) {
    e.stopPropagation();
    let newFilters = [...filters];
    newFilters[id - 1] = !newFilters[id - 1];
    setFilters(newFilters);
    setActualPage(1);
  }

  useEffect(() => {
    setChecked(filterRef);
  }, [filterRef]);

  return (
    <>
      <li>
        <button
          className={"dropdown-item" + (checked === true ? " active" : "")}
          type="button"
          onClick={handleClick}
        >
          {name}
        </button>
      </li>
    </>
  );
};
