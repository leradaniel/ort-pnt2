import AboutMe from "../Components/Views/AboutMe";
import Home from "../Components/Views/Home";
import Maintenance from "../Components/Maintenance";
import ProductsContainer from "../Components/Views/ProductsContainer";
import HolyPlaceApp from "../HolyPlaceApp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HolyPlaceApp />,
    children: [
      {
        path: "/productos",
        element: <ProductsContainer />,
      },
      {
        path: "/informacion",
        element: <AboutMe />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/mentenimiento",
    element: <Maintenance />,
  },
]);

export default router;
