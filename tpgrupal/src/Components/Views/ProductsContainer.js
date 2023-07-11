import React from "react";
import FilterProvider from "../../context/FiltersContext";
import Products from "../Products";

const ProductsContainer = () => {
  return (
    <>
      <FilterProvider>
        <Products />
      </FilterProvider>
    </>
  );
};

export default ProductsContainer;
