import { ProductItem } from "./ProductItem";
import ProductsJson from "../data/products.json";
import { Filter } from "./Filter";
import React, { useContext, useState } from "react";
import { FiltersContext } from "../Components/FiltersContext";
import { Paginacion } from "./Paginacion";

const Products = () => {
  const { filters } = useContext(FiltersContext);
  let disablePages = false
  const [actualPage, setActualPage] = useState(1);

  const [totalProductsPerPage, setTotalProductsPerPage] = useState(9);

  const getProducts = (productList) => {
    if (checkMustFilter()) {
      let filteredProducts = ProductsJson.filter((product) => {
        let returnValue = true;
        const productCategories = product.tags.split("/");
        for (let filter in filters) {
          if (filters[filter] === true) {
            let catNum = (Number(filter) + 1).toString();
            if (!productCategories.includes(catNum)) {
              returnValue = false;
            }
          }
        }
        return returnValue;
      });
      return filteredProducts;
    } else {
      return productList;
    }
  };

  const checkMustFilter = () => {
    for (let filter of filters) {
      if (filter === true) return true;
    }
    return false;
  };

    let products = getProducts(ProductsJson);

  const getTotalPages = () => {
    let pagesNumber = Math.ceil(products.length / totalProductsPerPage);
    pagesNumber > 1 ? disablePages=false : disablePages=true;
    return pagesNumber;
  };

  let prodcutsPerPage = products.slice(
    (actualPage - 1) * totalProductsPerPage,
    actualPage * totalProductsPerPage
  );

  let productsContainer = prodcutsPerPage.map((product) => {
    const categories = product.tags.split("/");
    return (
      <ProductItem
        key={product.name}
        name={product.name}
        id={product.id}
        tags={categories}
      />
    );
  });

  const changeProductsPerPage = (maxProducts) => {
    setTotalProductsPerPage(maxProducts);
    setActualPage(1);
  };

  return (
    <>
      <h1>Productos</h1>
      <Filter setActualPage={setActualPage} />

      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Productos por página: {totalProductsPerPage}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(9);
              }}
            >
              9
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(18);
              }}
            >
              18
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(27);
              }}
            >
              27
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                changeProductsPerPage(36);
              }}
            >
              36
            </button>
          </li>
        </ul>
      </div>
      <div className="card-deck">{productsContainer}</div>

      <Paginacion
        page={actualPage}
        totalPages={getTotalPages()}
        onChange={(page) => setActualPage(page)}
        disabled={disablePages}
      />
    </>
  );
};

export default Products;