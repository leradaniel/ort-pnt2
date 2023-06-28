import React, { useState } from "react";
import { FiltersContext } from "./Components/FiltersContext";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Maintenance from "./Components/Maintenance";
import TagsJson from "./data/tags.json";
import AboutMe from "./Components/Views/AboutMe";
import Contact from "./Components/Views/Contact";

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
      <Navbar />
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        {loadMaintenance(false)}
      </FiltersContext.Provider>
    </>
  );
};

export default HolyPlaceApp;
