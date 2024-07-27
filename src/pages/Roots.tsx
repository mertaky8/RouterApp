import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import FavoritesCounter from "../favorites/favoritesCounter";

const Roots = () => {
  return (
    <>
      <Navbar />
      <FavoritesCounter />
      <Outlet />
    </>
  );
};

export default Roots;
