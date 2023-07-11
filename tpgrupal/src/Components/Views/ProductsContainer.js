import React, { useState } from "react";
import { FiltersContext } from "../FiltersContext";
import TagsJson from "../../data/tags.json";
import Products from "../Products";

const ProductsContainer = () => {
  const initFilters = () => {
    let tagsActive = TagsJson.map(() => {
      return false;
    });
    return tagsActive;
  };
  const [filters, setFilters] = useState(initFilters);

  return (
    <>
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <Products />
      </FiltersContext.Provider>
    </>
  );
};

export default ProductsContainer;
