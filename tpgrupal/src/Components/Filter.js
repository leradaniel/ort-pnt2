import React, { useContext } from "react";
import { FilterItem } from "../Components/FilterItem";
import TagsJson from "../data/tags.json";
import { FiltersContext } from "./FiltersContext";

export const Filter = ({ setActualPage }) => {
  const filterNames = ["Colores", "Tipo", "Temática"];

  let asignedFilters = TagsJson.map((tag) => {
    if (tag.position === 0) tag.position = tag.id;
    return tag;
  });

  let orderedFilters = asignedFilters.sort((a, b) =>
    a.position > b.position ? 1 : -1
  );

  let filtersContainer = [];

  for (const filter in orderedFilters) {
    let filterRef = orderedFilters[filter];
    if (filtersContainer[filterRef.type - 1] === undefined)
      filtersContainer[filterRef.type - 1] = [];
    filtersContainer[filterRef.type - 1].push(
      <FilterItem
        key={filterRef.name}
        name={filterRef.name}
        id={filterRef.id}
        setActualPage={setActualPage}
      />
    );
  }

  let filtersWrapper = [];

  for (const filter in filtersContainer) {
    filtersWrapper.push(
      <div key={filter} className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {filterNames[filter]}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {filtersContainer[filter]}
        </ul>
      </div>
    );
  }

  const { filters, setFilters } = useContext(FiltersContext);

  const resetFilters = () => {
    let deactivatedFilters = [...filters];
    for (let filter in deactivatedFilters) {
      deactivatedFilters[filter] = false;
    }
    setFilters(deactivatedFilters);
    setActualPage(1);
  };

  return (
    <>
      {filtersWrapper}

      <button className="btn btn-danger" onClick={resetFilters}>
        Reiniciar filtros
      </button>
    </>
  );
};
