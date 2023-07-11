import { createContext, useState } from "react";
import TagsJson from "../data/tags.json";

export const FiltersContext = createContext({});
const { Provider } = FiltersContext;

const initFilters = () => {
  let tagsActive = TagsJson.map(() => {
    return false;
  });
  return tagsActive;
};

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(initFilters);
  return <Provider value={{ filters, setFilters }}>{children}</Provider>;
};

export default FilterProvider;
