import React, { useState } from "react";
import { FiltersContext } from "./Components/FiltersContext";
import Products from "./Components/Products";
import Maintenance from "./Components/Maintenance";
import TagsJson from "./data/tags.json";
import AboutMe from "./Components/Views/AboutMe";
import Contact from "./Components/Views/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const HolyPlaceApp = () => {
  const initFilters = () => {
    let tagsActive = TagsJson.map(() => {
      return false;
    });
    return tagsActive;
  };
  const [filters, setFilters] = useState(initFilters);
  const loadMaintenance = (active) => {
    if (active) {
      return <Maintenance />;
    } else {
      return <Products />;
    }
  };
  return (
    <>
      <Header />
      {/* TODO: Esto va en el FiltersContext
      Tener un App con el context y que abarque a los childrens que lo usen. O sea, esto moverlo al otro componente (ver las clases) */}
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        {loadMaintenance(false)}
      </FiltersContext.Provider>
      <Footer />
    </>
  );
};

export default HolyPlaceApp;

{/* Para la pagina de mantenimiento: Menajarlo con una prop y mandar ambas apps. Usar render condicional en las rutas */}
{/* Meter routers */}
{/* Final: Presentar las mejoras */}