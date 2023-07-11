import React from "react";
import FilterProvider from "../FiltersContext";
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
